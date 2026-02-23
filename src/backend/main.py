from gc import disable
from nt import access
from sqlite3 import dbapi2
from uu import encode
from webbrowser import get
from starlette.status import HTTP_401_UNAUTHORIZED
from typing_extensions import deprecated
from fastapi import FastAPI, Form, File, UploadFile, Query, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from pathlib import Path
from datetime import datetime, timedelta
from typing import Optional, List
import os
import shutil
import json
from jose import JWTError, jwt
from passlib.context import CryptContext




SECRET_KEY = '5e318be18fc9293fd2911e7bc80a5128dff6ccf13973972ae36bfb1e4c6bbb9a'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 30

db = {
    'omar':{
        'username':'omar',
        'full_name': 'omar_ismail',
        'email':'omar@gmail.com',
        'hashed_pass':'',
        'disabled' : False
    }
}
# ---------------------------
# DATA MODELS
# ---------------------------
class placeholder(BaseModel):
    id: int
    name: str
    role: str
    image: str
class Contact(BaseModel):
    address: str
    phone: str
    email: str


class Project(BaseModel):
    id: int
    name: str
    description: str
    image: str
    location: str

class TeamMember(BaseModel):
    id: int
    name: str
    role: str
    image: str


class Scheduleday(BaseModel):
    day: str
    open: str
    close: str
class HomeData(BaseModel):
    about: List[str]
    projects: List[Project]
    team: List[TeamMember]
    contact: Contact
    schedule: List[Scheduleday] 
class Token(BaseModel):
    access_token: str
    token_type : str

class TokenData(BaseModel):
    username: str or None = None

class User(BaseModel):
    username: str
    email: str or None = None
    full_name: str or None = None
    disabled: bool or None = None

class UserInDB(User):
    hashed_password: str

pwd_context= CryptContext(schemes=['bcrypt'],deprecated='auto')
oauth_2_scheme = OAuth2PasswordBearer(tokenUrl='token')
app = FastAPI()
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
def hash_password(password):
    return pwd_context.hash(password)

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)
    return None

def authenticate_user(db, username: str, password: str):
    user=get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    
    return user

def create_access_token(data: dict, expires_delta: timedelta or None = None):
    to_encode=data.copy()
    if expires_delta:
        expires= datetime.utcnow() + expires_delta
    else:
        expires= datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({'exp': expires})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
async def get_current_user(token: str = Depends(oauth_2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception

    user = get_user(db, username=token_data.username)
    if user is None:
        raise credentials_exception

    return user

async def is_current_user_active(current_user: UserInDB=Depends (get_current_user)):
    if current_user.disabled:
        raise HTTPException
    
    return current_user

@app.post('/token', response_model=Token)
async def login_for_access_token(form_data:OAuth2PasswordRequestForm=Depends()):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail='wrong username or password',  headers={"WWW-Authenticate": 'Bearer'})
    access_token_expires=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token=create_access_token(data={"sub":user.username},expires_delta=access_token_expires)
    return{"access_token":access_token, "token_type":"bearer"}

@app.get("/users/me/", response_model=User)
async def users_me(current_user: User=Depends(is_current_user_active)):
    return current_user

@app.get("/users/me/items",)
async def users_me(current_user: User=Depends(is_current_user_active)):
    return [{"item_id":1,"owner":current_user}]



BASE_DIR = Path(__file__).resolve().parent  # -> src/backend
app.mount(
    "/Uploads",
    StaticFiles(directory=BASE_DIR / "Uploads"),
    name="uploads"
)


PROJECTS_DIR = BASE_DIR / "Uploads/Projects"
PROJECTS_DIR.mkdir(parents=True, exist_ok=True)

MEMBERS_DIR = BASE_DIR / "Uploads/members"
MEMBERS_DIR.mkdir(parents=True, exist_ok=True)

PROJECTS_DATA_FILE = BASE_DIR / "Uploads/projects.json"

# make sure Uploads folder exists
PROJECTS_DATA_FILE.parent.mkdir(parents=True, exist_ok=True)

if not PROJECTS_DATA_FILE.exists():
    PROJECTS_DATA_FILE.write_text("[]")

MEMBERS_DATA_FILE = BASE_DIR / "Uploads/member.json"

# make sure Uploads folder exists
MEMBERS_DATA_FILE.parent.mkdir(parents=True, exist_ok=True)

if not MEMBERS_DATA_FILE.exists():
    MEMBERS_DATA_FILE.write_text("[]")

# Allow React to access this API
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)







# ---------------------------
# ROUTES
# ---------------------------

@app.get("/api/debug")
def debug():
    return {
        "projects_file": str(PROJECTS_DATA_FILE.resolve()),
        "exists": PROJECTS_DATA_FILE.exists(),
        "content": PROJECTS_DATA_FILE.read_text()
    }

@app.get("/api/home", response_model=HomeData)
def get_home_data():
    return {
        "about": [
            "Intelligent Engineering (IE Design)",
            "Engineering + Construction Background",
            "2004 Engineering Europe – Middle East - USA",
            "2008 Canada & EA Dynamics / IE Design",
            "2016 Intelligent Engineering Design (IE Design)",
            "86 Years of Family Combined Structural Engineering",
            "2021 Creative Structures",
            "Creative Structures",
            "74 Years of Combined Architectural Experience",
            "Current Architectural Team 7 Team Members",
        ],
        "placeholders":[

 {"id": 1, "name": "oxford towers", "description": "Shared information is only what is available currently for Public", "image": "ox_towers.png"},
        ],
        "projects": [
            {"id": 1, "name": "Highland Elite Towers", "description": "A $200 M twin-tower residential development rising 17 storeys above a four-level podium, combining thoughtful design, engineering, and zoning approvals.", "image": "highland_elite.png", "location":"London, ON"},
            {"id": 2, "name": "South Residential Towers", "description": "A $250 million residential project,featuring two 17-storey towers over a four-storey parking podium.", "image": "sou_res.png", "location":"London, ON"},
            {"id": 3, "name": "Oxford Capulet Towers", "description": "A residential development, with a budget of $200 million, consisting of three 25-storey towers connected by a three-level podium parking.", "image": "ox_cap.png", "location":"London, ON"},
            {"id": 4, "name": f"Meadowlily Subdivision", "description": "A $200 M twin-tower residential development rising 17 storeys above a four-level podium, combining thoughtful design, engineering, and zoning approvals.", "image": "meadowilly.png", "location":"London, ON"},
            {"id": 5, "name": "Cobourg CRU UNITS", "description": "a commercial retail development of approximately 6,805 ft², delivered with full architectural, structural, and MEP design services.", "image": "coburg.png", "location":"Cobourg, ON"},
            {"id": 6, "name": "Huron Church ", "description": "A  modern commercial retail development featuring approximately 23,000 ft² and 7,100 ft² of space, delivered with full architectural, structural, and MEP design services.", "image": "huron.png", "location":"Winsor, ON"},
        ],
        "team": [
            {"id": 1, "name": "kenneth ngacaku", "role": "architectural lead", "image": "arch_lead.png"},
            {"id": 2, "name": "Daniel Heo", "role": "Arch Designer / BIM Coordinator", "image": "BIM_coord.jpg"},
        ],
        "schedule": [
            {"day": "Monday", "open": "8am", "close": "5pm"},
            {"day": "Tuesday", "open": "8am", "close": "5pm"},
            {"day": "Wednesday", "open": "8am", "close": "5pm"},
            {"day": "Thursday", "open": "8am", "close": "5pm"},
            {"day": "Friday", "open": "8am", "close": "5pm"},
        ],
        "contact": {
    "address": "2C-1701 Richmond Street, London, Ontario.",
    "phone": "+1 (519) 878-5488",
    "email": "cs@creativestr.ca"
},

    }

@app.get("/api/team", response_model=List[TeamMember])
def get_team_data():
    return [
        {"id": 1, "name": "Kenneth Ngacaku", "role": "Architectural Lead", "image": "arch_lead.png"},
        {"id": 2, "name": "An Vu", "role": "Architectural Designer", "image": "an_vu.png"},
        {"id": 3, "name": "Aida Isic", "role": "Arch Designer / BIM Manager ", "image": "aida.png"},
        {"id": 4, "name": "Kira Matveeva", "role": "BIM Manager / Arch. Designer ", "image": "yagami.png"},
        {"id": 5, "name": "Daniel Heo", "role": "Arch Designer / BIM Coordinator", "image": "BIM_coord.jpg"},
        {"id": 6, "name": "Dora Vestic", "role": "Senior Architectural Designer", "image": "sad.png"},
        {"id": 7, "name": "Sabrina Villela", "role": "OAA Intern / Architectural Designer ", "image": "oaa.png"},
    ]

@app.get("/api/what-we-do")
def get_what_we_do():
    return [
        {
            "id": 1,
            "title": "Technical Design",
            "text": "We translate design concepts into buildable solutions through detailed technical planning, material selection, and coordination to ensure performance, safety, and efficiency.",
            "rowClass": "row-1"
        },
        {
            "id": 2,
            "title": "Applied Research + Development",
            "text": "We explore innovative methods, materials, and technologies to develop forward-thinking solutions that enhance performance, sustainability, and design outcomes.",
            "rowClass": "row-1"
        },
        {
            "id": 3,
            "title": "Architecture | Urban Development",
            "text": "We design buildings and urban environments that balance functionality, sustainability, and cultural context, creating spaces that support vibrant communities and long-term growth.",
            "rowClass": "row-2",
            "image": "/compound.png"
        },
        {
            "id": 4,
            "title": "Interior Design",
            "text": "We create thoughtful interior environments that enhance comfort, functionality, and identity through careful spatial planning, materials, lighting, and detail design.",
            "rowClass": "row-3",
            "image": "/interior.png"
        },
        {
            "id": 5,
            "title": "Building Information Modeling",
            "text": "We use intelligent digital models to coordinate design, streamline collaboration, and improve accuracy across all stages of planning, design, and construction.",
            "rowClass": "row-4",
            "image": "/bim_model.png"
        },
        {
            "id": 6,
            "title": "Design Communication and Visualization",
            "text": "We bring ideas to life through clear drawings, diagrams, and visualizations that help clients and stakeholders understand, engage with, and confidently move projects forward.",
            "rowClass": "row-5"
        },
        {
            "id": 7,
            "title": "Structural Engineering",
            "text": "We design robust and efficient structural systems that ensure safety, stability, and longevity, seamlessly integrated with architectural intent.",
            "rowClass": "row-5" 
        }
    ]
@app.post("/upload-team/")
async def upload_team_member(
    name: str = Form(...),
    sallery: str =Form(...),
    position: str = Form(...),
    email: str =Form(...),
    file: UploadFile = File(...)
):
    # save image
    file_path = MEMBERS_DIR / file.filename
    with file_path.open("wb") as f:
        shutil.copyfileobj(file.file, f)

    # load existing projects
    members = json.loads(MEMBERS_DATA_FILE.read_text())

    # create new project entry
    member = {
        "id": len(members) + 1,
        "name": name,
        "budget": sallery,
        "position": position,
        "email": email,
        "image": f"http://localhost:8000/Uploads/members/{file.filename}"
    }

    members.append(member)

    # save back to file
    MEMBERS_DATA_FILE.write_text(json.dumps(members, indent=2))

    return {
        "message": "member saved to backend",
        "member": member
    }

@app.post("/upload-project/")
async def upload_project(
    title: str = Form(...),
    location:str = Form(...),
    budget: str =Form(...),
    description: str = Form(...),
    status:str =Form(...),
    scope:str =Form(...),
    file: UploadFile = File(...)
):
    # save image
    file_path = PROJECTS_DIR / file.filename
    with file_path.open("wb") as f:
        shutil.copyfileobj(file.file, f)

    # load existing projects
    projects = json.loads(PROJECTS_DATA_FILE.read_text())

    # create new project entry
    project = {
        "id": len(projects) + 1,
        "title": title,
        "location" :location,
        "budget": budget,
        "status": status,
        "description": description,
        "scope":scope,
        "image": f"http://localhost:8000/Uploads/Projects/{file.filename}"
    }

    projects.append(project)

    # save back to file
    PROJECTS_DATA_FILE.write_text(json.dumps(projects, indent=2))

    return {
        "message": "project saved to backend",
        "project": project
    }
@app.get("/api/projects")
def get_projects():
    return json.loads(PROJECTS_DATA_FILE.read_text())

@app.get("/search-members/")
async def search_members(q: Optional[str] = Query(None)):
    members = json.loads(MEMBERS_DATA_FILE.read_text())

    if not q:
        return {"count": len(members), "results": members}

    q = q.lower()

    results = [
        member for member in members
        if q in member["name"].lower()
        or q in member["position"].lower()
        or q in member["email"].lower()
    ]

    return {
        "count": len(results),
        "results": results
    }

