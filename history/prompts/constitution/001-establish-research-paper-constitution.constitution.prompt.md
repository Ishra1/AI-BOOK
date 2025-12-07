---
id: 001
title: Establish Research Paper Constitution
stage: constitution
date: 2025-12-07
surface: "agent"
model: "gemini"
feature: "none"
branch: master
user: (unknown)
command: "/sp.constitution"
labels: ["governance", "documentation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
- .specify/templates/plan-template.md
tests:
[]
---

## Prompt

/sp.constitution **Project:** Research Paper on AI‑Native Software Development  

## Constitutional Principles (Non‑Negotiable)  
1. **Accuracy Through Primary Sources**  
   - Every technical or research‑based claim must be directly verified using primary sources (e.g. official documentation, foundational papers, or authoritative research).  

2. **Academic Clarity**  
   - All written content must be clear, structured, and logically presented, targeting an audience with a computer‑science background.  

3. **Reproducibility Mandate**  
   - Every claim in the research paper must be traceable, cited appropriately, and independently verifiable.  

4. **Scientific Rigor**  
   - Peer‑reviewed academic literature must be given highest priority.  
   - Speculation is not allowed without appropriate citation.  

## Standards of Compliance  
### A. Citation Rules  
- Use APA style for citations (American Psychological Association).  
- All factual and technical claims must be supported by sources.  
- At least 50% of sources must come from peer‑reviewed journals or conference papers.  

### B. Integrity Requirements  
- Zero tolerance for plagiarism.  
- All paraphrasing must be proper and accurate.  
- Every external idea must be credited.  

### C. Writing Quality Requirements  
- Readability level: roughly equivalent to Flesch‑Kincaid Grade 10–12.  
- Writing must be concise, academic, and non-redundant.  

## Document Constraints  
- Length: **5,000–7,000 words**.  
- Minimum **15 authoritative sources**.  
- Final deliverable format: PDF with embedded APA citations.  
- Any figures or tables must be properly captioned and referenced.  

## Success Criteria  
- All claims must be fact-verified against credible sources.  
- Zero plagiarism (confirmed by automated and manual checks).  
- APA citations used consistently throughout.  
- The paper must pass a peer-style academic review for accuracy.  
- Content must remain aligned with the overall goal of exploring AI‑native software development.  

---

## Response snapshot

I have created the project constitution in `.specify/memory/constitution.md` and updated the plan template at `.specify/templates/plan-template.md` to reflect the new principles. A PHR has been created.

## Outcome

- ✅ Impact: Established foundational governance for the project.
- 🧪 Tests: No tests were run.
- 📁 Files: 2 files modified.
- 🔁 Next prompts: User can now proceed with planning or other tasks.
- 🧠 Reflection: The process of updating the constitution and propagating changes to templates worked as expected. The fallback to native PHR creation was necessary due to the shell script environment.

## Evaluation notes (flywheel)

- Failure modes observed: Shell script execution failed on a non-bash system.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
