---
description: "Task list for implementing the Physical AI & Humanoid Robotics Textbook"
---

# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/001-physical-ai-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Docusaurus Project Initialization)

**Purpose**: Initialize the Docusaurus project and create the basic folder structure for the textbook content.
**Est. Duration**: 2-4 hours

- [X] T001 Initialize a new Docusaurus v3.9 project in the repository root.
- [X] T002 Create the main content directory `docs/`.
- [X] T003 [P] Create the directory structure for all 13 weeks inside `docs/` (e.g., `docs/01-week-1-foundations/`, `docs/02-week-2-sensing/`, etc.) per `plan.md`.
- [X] T004 Configure the Docusaurus `docusaurus.config.js` with the book title "Physical AI & Humanoid Robotics" and theme settings.

---
**AGENT →** shows proof of work (directory listing, config file) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 1" → `git commit` → "Proceed to Phase 2"
---

## Phase 2: Foundational (Content Skeleton & Navigation)

**Purpose**: Create placeholder files for all planned content and set up the main navigation sidebar. This makes the entire book structure navigable, even if empty.
**Est. Duration**: 3-5 hours

- [X] T005 [P] Create an `intro.mdx` file in `docs/` with a brief course overview.
- [X] T006 [P] Create placeholder Markdown files (e.g., `01-intro-to-physical-ai.mdx`) for every module listed in the `plan.md` file structure. Each file should contain a title and "Content to be added."
- [X] T007 [P] Create the `hardware-requirements.mdx` file in `docs/`.
- [X] T008 Configure the `sidebars.js` file to create a collapsible navigation menu matching the 13-week structure from `plan.md`.

---
**AGENT →** shows proof of work (sidebar config, file listing) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 2" → `git commit` → "Proceed to Phase 3"
---

## Phase 3: User Story 1 - Student Accesses Weekly Content (Priority: P1) 🎯 MVP

**Goal**: A student can navigate to any week in the textbook and read its content.
**Independent Test**: Deploy the site and confirm that all 13 weeks are in the sidebar and clicking them reveals the corresponding (placeholder or real) content.
**Est. Duration**: 4-8 hours

- [X] T009 [US1] Write the full content for all modules in `docs/01-week-1-foundations/` based on the spec.
- [X] T010 [US1] Write the full content for `docs/03-week-3-ros/01-intro-to-ros2.mdx`.
- [X] T011 [P] [US1] Add learning outcomes to the top of each completed content file.
- [X] T012 [P] [US1] Add APA-style inline citations for technical concepts in the written content.
- [X] T013 [US1] Verify that the Docusaurus site builds successfully (`npm run build`) and navigation for all 13 weeks works as expected.

---
**AGENT →** shows proof of work (link to deployed preview, screenshots) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 3" → `git commit` → "Proceed to Phase 4"
---

## Phase 4: User Story 2 - Instructor Uses Code Snippet (Priority: P2)

**Goal**: An instructor can easily copy code snippets from the textbook for use in lectures.
**Independent Test**: Find a page with a code block, use the copy button, and paste the content into a text editor to verify it's correct.
**Est. Duration**: 1-2 hours

- [X] T014 [US2] Add Python/rclpy code examples to the content in `docs/03-week-3-ros/02-nodes-topics-services.mdx`.
- [X] T015 [P] [US2] Add a URDF example to `docs/05-week-5-simulation/02-urdf-and-xacro.mdx`.
- [X] T016 [US2] Confirm that code blocks are rendered correctly in the Docusaurus site and that the built-in copy button is functional.

---
**AGENT →** shows proof of work (screenshots of rendered code blocks) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 4" → `git commit` → "Proceed to Phase 5"
---

## Phase 5: User Story 3 - Student Checks Hardware Requirements (Priority: P3)

**Goal**: A prospective student can find the list of required hardware for the course.
**Independent Test**: Navigate to the "Hardware Requirements" page and check that the specified list of equipment is present.
**Est.Duration**: 1 hour

- [X] T017 [US3] Populate the `docs/hardware-requirements.mdx` file with the list of required hardware: RTX GPU, Jetson Orin Nano, RealSense D435i, and Unitree robots.

---
**AGENT →** shows proof of work (screenshot of the hardware page) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 5" → `git commit` → "Proceed to Phase 6"
---

## Phase 6: Polish & Future-Proofing

**Purpose**: Add placeholders for future features to ensure the architecture accommodates them.
**Est. Duration**: 2-3 hours

- [X] T018 [P] Add a placeholder component or section in the Docusaurus layout for a future RAG chatbot UI.
- [X] T019 [P] Add a placeholder button or link in the UI for a future language-switching (Urdu translation) feature.
- [X] T020 [P] Review the overall site for mobile responsiveness and note any display issues.
- [X] T021 [P] Create a placeholder `docs/07-week-7-midterm/midterm-project.mdx` with a description of the assessment.

---
**AGENT →** shows proof of work (screenshots of placeholders) → "Ready for human review"
**HUMAN →** reviews → "Committing Phase 6" → `git commit` → "Project MVP complete"
---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: Can start immediately.
- **Phase 2 (Foundational)**: Depends on Phase 1.
- **Phase 3 (US1)**: Depends on Phase 2.
- **Phase 4 (US2)**: Depends on Phase 3 (needs content to add snippets to).
- **Phase 5 (US3)**: Depends on Phase 2.
- **Phase 6 (Polish)**: Depends on all previous phases.

### Parallel Opportunities

- Once Phase 2 is complete, work on User Stories (Phase 3, 4, 5) can be parallelized, though the tasks are small enough to be done sequentially.
- Within Phase 1, T003 can be done while T004 is being worked on.
- Within Phase 2, T005, T006, and T007 can be done in parallel.
- Polish tasks (T018-T021) are largely independent and can be done in parallel.
