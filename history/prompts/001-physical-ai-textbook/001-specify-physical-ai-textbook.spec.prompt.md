---
id: 001
title: Specify Physical AI Textbook
stage: spec
date: 2025-12-07
surface: agent
model: gemini-cli
feature: physical-ai-textbook
branch: 001-physical-ai-textbook
user: unspecified
command: /sp.specify
labels: [spec, textbook, docusaurus]
links:
  spec: specs/001-physical-ai-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-textbook/spec.md
  - specs/001-physical-ai-textbook/checklists/requirements.md
tests:
  - None
---

## Prompt

**Task:** Write a complete AI-native technical textbook titled **“Physical AI & Humanoid Robotics”**, designed for a 13-week university-level course. The book must:
- Target students with computer science or engineering background (e.g. faculty or students at PIAIC/GIAIC).
- Be structured week by week, according to the official course outline:
- **Weeks 1–2:** Foundations of Physical AI — embodied intelligence, sensor systems
- **Weeks 3–5:** ROS 2 — nodes, topics, services, rclpy, URDF, launch files
- **Weeks 6–7:** Gazebo & Unity — physics simulation, digital twin, LiDAR/IMU/camera simulations
- **Weeks 8–10:** NVIDIA Isaac — Isaac Sim, Isaac ROS, VSLAM, Nav2, reinforcement learning
- **Weeks 11–12:** Humanoid development — kinematics, bipedal locomotion, manipulation
- **Week 13:** Conversational robotics — Whisper, LLM planning, VLA; plus a capstone project
Include in the textbook:
- Clear learning outcomes for each week
- Code snippets (in Python/rclpy) and URDF examples
- Hardware requirements: e.g., RTX GPU workstation; Jetson Orin Nano; RealSense D435i; Unitree Go2 or G1 robots
- Assessments: e.g., a ROS 2 package demo, a Gazebo simulation, an Isaac-based perception pipeline, and a capstone project integrating voice → navigation → grasp
- Real-world relevance: motivations for humanoid robotics, challenges in sim-to-real transfer, practical applications
**Format Requirements:**
- Use Markdown compatible with Docusaurus v3.9 (not PDF).
- Sidebar navigation should reflect the weekly course structure.
- Inline citations must follow APA style and reference authoritative sources (e.g. official ROS documentation, NVIDIA whitepapers, peer-reviewed IEEE papers).
- The book should be designed so that later on you can integrate:
- a retrieval-augmented generation (RAG) chatbot,
- user login and personalization,
- Urdu translation support,
- per-user customization / personalization features.
**Exclusions (do not include):**
- Ethical debates about AI/robotics
- Vendor comparisons or marketing-style content
- A full literature review (you only need to reference minimal necessary sources for each technical concept)
- Implementation code for the chatbot or authentication — these are postponed and will come under `/sp.plan`
This specification will serve as the basis for `/sp.plan`, which will drive the Docusaurus frontend + FastAPI RAG backend.
---

## Response snapshot

Created branch `001-physical-ai-textbook` and generated the initial feature specification and a quality checklist. The specification details the requirements for a 13-week university-level textbook on "Physical AI & Humanoid Robotics," formatted for Docusaurus v3.9.

- `specs/001-physical-ai-textbook/spec.md`
- `specs/001-physical-ai-textbook/checklists/requirements.md`

## Outcome

- ✅ Impact: High. This lays the foundation for the entire project.
- 🧪 Tests: None.
- 📁 Files: 2 files created.
- 🔁 Next prompts: `/sp.plan`
- 🧠 Reflection: The process was smooth, and the initial user prompt was very detailed, which made generating the spec straightforward. The script failure was a minor issue that was easily worked around.
