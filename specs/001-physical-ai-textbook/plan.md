# Implementation Plan: Physical AI & Humanoid Robotics Textbook & Chatbot

**Branch**: `001-physical-ai-textbook` | **Date**: 2025-12-07 | **Spec**: [spec.md](./spec.md)

## 1. System Architecture Overview

The system consists of two main components: the AI-Native Textbook and the RAG Chatbot.

*   **Frontend (Textbook)**: A static website built with **Docusaurus v3.9**. It will host the Markdown-based textbook content. The site will be pre-rendered for performance and SEO.
*   **Backend (RAG Chatbot)**: A Python-based service using **FastAPI**. This service will handle:
    *   Ingesting and processing the textbook's Markdown content.
    *   Indexing the content into a vector database.
    *   Providing a query endpoint for the chatbot to retrieve relevant context and generate answers.
*   **Database (Vector Store)**: **ChromaDB** will be used to store vector embeddings of the textbook content for efficient similarity search. It's lightweight and can be run in-process or as a separate server.
*   **Authentication**: **Auth.js (formerly NextAuth.js)** will be integrated into the Docusaurus application to manage user sessions and enable personalization features (e.g., saving progress, chatbot history).
*   **Deployment**:
    *   The Docusaurus frontend will be deployed to **Vercel** or **Netlify** for continuous deployment from the Git repository.
    *   The FastAPI backend and ChromaDB will be containerized using **Docker** and deployed to a cloud service like **Google Cloud Run** or **AWS Fargate** for scalability.

## 2. Tech-Stack Choices

| Component         | Technology                      | Rationale                                                                                                       |
| ----------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Textbook FE**   | Docusaurus v3.9 (React)         | User-specified requirement. Excellent for documentation sites, provides MDX support, and has a rich plugin ecosystem. |
| **Chatbot BE**    | Python 3.11 + FastAPI           | Python has a mature AI/ML ecosystem (e.g., LangChain, Hugging Face). FastAPI is high-performance and easy to learn.   |
| **Vector DB**     | ChromaDB                        | Open-source, simple to set up, and integrates well with LangChain. Good for starting and can be scaled if needed.    |
| **Authentication**| Auth.js                         | Well-supported, flexible authentication library for React applications. Supports many providers (OAuth, email).       |
| **Deployment FE** | Vercel / Netlify                | Industry standard for deploying static/Jamstack sites. Offers free tiers and seamless Git integration.            |
| **Deployment BE** | Docker + Google Cloud Run       | Docker provides containerization for consistency. Cloud Run is a serverless platform that simplifies deployment.      |

## 3. File/Folder Structure (Textbook Content)

The textbook content will be organized in a `docs` directory at the root of the Docusaurus project.

```text
docs/
├── intro.mdx                           # Introduction & Course Overview
├── 01-week-1-foundations/
│   ├── 01-intro-to-physical-ai.mdx
│   └── 02-history-of-robotics.mdx
├── 02-week-2-sensing/
│   ├── 01-sensors-and-perception.mdx
│   └── 02-computer-vision-basics.mdx
├── 03-week-3-ros/
│   ├── 01-intro-to-ros2.mdx
│   └── 02-nodes-topics-services.mdx
├── 04-week-4-kinematics/
│   ├── 01-forward-kinematics.mdx
│   └── 02-inverse-kinematics.mdx
├── 05-week-5-simulation/
│   ├── 01-intro-to-gazebo.mdx
│   └── 02-urdf-and-xacro.mdx
├── 06-week-6-navigation/
│   ├── 01-slam-and-localization.mdx
│   └── 02-path-planning.mdx
├── 07-week-7-midterm/
│   └── midterm-project.mdx
├── 08-week-8-manipulation/
│   ├── 01-grasping-and-manipulation.mdx
│   └── 02-motion-planning-moveit.mdx
├── 09-week-9-control/
│   ├── 01-pid-control.mdx
│   └── 02-whole-body-control.mdx
├── 10-week-10-humanoids/
│   ├── 01-humanoid-robot-design.mdx
│   └── 02-bipedal-locomotion.mdx
├── 11-week-11-learning/
│   ├── 01-reinforcement-learning.mdx
│   └── 02-imitation-learning.mdx
├── 12-week-12-ethics/
│   └── 01-robot-ethics-and-safety.mdx
├── 13-week-13-final/
│   └── final-project.mdx
└── hardware-requirements.mdx           # Hardware specs section
```

## 4. Sidebar & Navigation Layout

The sidebar will be configured in `sidebars.js` in the Docusaurus project to mirror the folder structure. It will be a collapsible, multi-category sidebar.

```javascript
// Example sidebars.js
module.exports = {
  textbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Week 1: Foundations',
      items: ['01-week-1-foundations/01-intro-to-physical-ai', '01-week-1-foundations/02-history-of-robotics'],
    },
    // ... categories for weeks 2-13
    'hardware-requirements',
  ],
};
```

## 5. Phased Implementation Plan

| Phase | Task                                           | Duration  | Dependencies |
| ----- | ---------------------------------------------- | --------- | ------------ |
| **1** | **Repo & Docusaurus Skeleton**                 | **1 Week**| -            |
|       | Init Git repo & setup Docusaurus v3.9          | 2 days    | -            |
|       | Create file structure for all 13 weeks         | 1 day     | -            |
|       | Write content for Week 1 as a sample module    | 2 days    | -            |
| **2** | **Full Textbook Content Skeleton**             | **4 Weeks**| Phase 1      |
|       | Create placeholder pages for all modules       | 1 week    | -            |
|       | Write detailed content for Weeks 2-6           | 3 weeks   | -            |
| **3** | **RAG Backend & Ingestion**                    | **3 Weeks**| Phase 2      |
|       | Setup FastAPI backend project                  | 2 days    | -            |
|       | Implement Markdown content ingestion script    | 1 week    | -            |
|       | Integrate ChromaDB and create indexing logic   | 1 week    | Phase 3 (Ingestion) |
|       | Build the query endpoint with LangChain        | 1 week    | Phase 3 (Indexing) |
| **4** | **Frontend Chatbot Integration**               | **2 Weeks**| Phase 3      |
|       | Design and build the React chatbot component   | 1 week    | -            |
|       | Integrate chatbot with the FastAPI backend     | 3 days    | -            |
|       | Implement Auth.js for user personalization     | 2 days    | -            |
| **5** | **Finalization & Deployment**                  | **2 Weeks**| Phase 4      |
|       | Implement translation toggle placeholder       | 2 days    | -            |
|       | Add placeholders for future sub-agent features | 2 days    | -            |
|       | Deploy FE to Vercel and BE to Cloud Run        | 1 week    | -            |
|       | Final testing and demo packaging               | 1 day     | -            |

## 6. Decision Register

| Decision Area     | Decision Made                 | Trade-offs                                                                        | Status      |
| ----------------- | ----------------------------- | --------------------------------------------------------------------------------- | ----------- |
| **Vector DB**     | Use ChromaDB initially        | Easy to start, but may require migration to a more robust solution (e.g., Pinecone, Weaviate) for very large scale. | **Proposed**|
| **BE Framework**  | FastAPI (Python)              | Excellent for AI/ML tasks, but Node.js (e.g., with NestJS) could offer better integration with the React frontend. | **Proposed**|
| **Authentication**| Auth.js                       | Tightly coupled with Next.js ecosystem, but can be adapted for Docusaurus. Alternative: Firebase Auth, Superbase Auth. | **Proposed**|
| **Content Source**| Markdown files in Git         | Simple, version-controlled. Alternative: Headless CMS (e.g., Strapi, Contentful) would offer a non-technical UI but adds complexity. | **Final**   |

## 7. Definition-of-Done Criteria

*   **Milestone 1 (Phase 1 Complete)**: Docusaurus website is deployed to Vercel with the "Week 1" content fully populated and viewable. The sidebar navigation is functional.
*   **Milestone 2 (Phase 3 Complete)**: The RAG backend is deployed and functional. An API endpoint can receive a query and return relevant chunks of text from the indexed textbook content.
*   **Milestone 3 (Project Complete)**: The chatbot UI is integrated into the live website, authenticated users can have a conversation with the RAG agent, and all phases of the implementation plan are complete. The site is live and accessible.

## 8. Risk Analysis

| Component         | Risk                                             | Mitigation Strategy                                                                                                   |
| ----------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Content**       | **Content creation bottleneck**: Writing 13 weeks of high-quality technical content is time-consuming. | Prioritize a breadth-first approach (skeleton first), then depth. Engage multiple subject matter experts or AI writing assistants if possible. |
| **RAG Chatbot**   | **Inaccurate or irrelevant answers**: The RAG model may retrieve incorrect context or hallucinate. | Implement robust evaluation metrics. Use advanced retrieval strategies (e.g., Hybrid Search, Re-ranking). Allow users to provide feedback on answers. |
| **Backend**       | **Scalability issues**: The FastAPI/ChromaDB backend may not handle high concurrent user loads. | Deploy on a serverless, auto-scaling platform like Cloud Run. Use load testing (e.g., Locust) to identify and address bottlenecks early. |
| **Integration**   | **Cross-origin (CORS) issues**: The frontend may have trouble communicating with the backend API. | Configure CORS policies correctly on the FastAPI backend to allow requests from the frontend's domain. |