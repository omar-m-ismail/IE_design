from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Form, File, UploadFile
import os
from pathlib import Path
from datetime import datetime
from pydantic import BaseModel
from typing import List
import os
import shutil
import json
from fastapi.staticfiles import StaticFiles



app = FastAPI()
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
        "contact": {
            "address": "placeholder address",
            "email": "example@gmail.com"
        },
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
async def upload_project(
    name: str = Form(...),
    sallery: str =Form(...),
    position: str = Form(...),

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

