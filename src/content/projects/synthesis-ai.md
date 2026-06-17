---
title: "Synthesis AI Lab (SAIL): AI Augmented Knowledge Synthesis in Collaborative Learning"
slug: "synthesis-ai"
area: ["AIED", "CSCL"]
shortDescription: "A GenAI-powered tool that supports knowledge synthesis in collaborative learning environments."
members: ["Xinran Zhu", "Bo Shui", "Miaomiao Wei", "Cong Wang"]
status: "active"
order: 1
image: "/images/projects/synthesis-ai.png"
---

## Overview

The SAIL project is a design and research initiative focused on developing and studying intelligent technologies that support meaningful and ethical partnerships between students and AI in collaborative knowledge creation. The project integrates two interconnected design components:

- Synthesis AI Lab, or SAIL, a tool powered by learning analytics techniques and large language models to support knowledge synthesis practices.
- Pedagogical strategies that guide classroom integration, with an emphasis on supporting human agency and productive knowledge creation in AI-mediated learning environments.

We use co-design methods to develop and implement the tool in both lab-based and real-world classroom settings. We investigate the role of AI in human thinking and knowledge creation. We particularly focus on how AI shapes interaction and supports key epistemic practices in collaborative learning, and how learning environments should be designed for meaningful human-AI partnerhip. These questions also lead us to ask what new forms of literacy, participation, and agency are needed for the future of work and learning.

<strong> Status: </strong> 

- Jun 26: SAIL v2 is currently under development, with new features and enhanced LLM capabilities to better support collaborative knowledge synthesis. 🌳
- Jan 26: SAIL v1 is currently being implemented in a graduate classroom. Stay tuned for empirical findings and design insights! 👩‍🏫
- Jan 26: 📢 We are excited to announce the alpha release of Synthesis AI Lab (SAIL)!
Explore the project site: https://synthesisai-lab.github.io/

## What is knolwedge synthesis

Knowledge synthesis is defined as the skillful and strategic integration of multiple strands of information to foster conceptual innovation, generate new knowledge, and design creative solutions (Deschryver, 2014; Kiili & Leu, 2019; Morabito & Chan, 2021; Nonaka & Takeuchi, 1995). It is central to how learners move from sharing information to creating new knowledge together. Knowledge synthesis is becoming an increasingly important skill in the age of AI, as humans must evaluate a vast landscape of ideas, connect diverse perspectives, work across human and AI contributions, and transform information into knowledge and innovation.

In collaborative learning contexts, we understand knowledge synthesis as the process of *connecting, analyzing, and integrating ideas across activities in ways that foster conceptual innovation, generate novel knowledge, and create solutions* (Zhu et al., 2026). Our focus on synthesis foregrounds the often-invisible connective work through which learners transform collaborative interaction, artifact development, and idea advancement into knowledge creation or knowledge building.

Knowledge synthesis is challenging. In collaborative learning, students often have to make sense of scattered ideas, different perspectives, incomplete contributions, and moments of disagreement. AI can help by summarizing discussions, surfacing patterns, suggesting connections, and prompting students to revisit evidence. But these supports also raise important questions: *How is epistemic agency distributed between students and AI? How are ideas selected, connected, and advanced? How can we design AI systems that augment, rather than replace, students’ thinking, collaboration, and knowledge work?*

These questions are especially important in many AI-mediated learning environments, where humans and AI may jointly shape how ideas are connected, evaluated, and developed. Through technology design and empirical research, we examine how humans and AI can work together in synthesis processes while keeping human agency, collaboration, and knowledge creation at the center.

## The design of SAIL
SAIL is designed around social annotation as a starting point for knowledge synthesis. In social annotation, students read course materials together, share comments on key passages, and make their emerging thinking visible to peers. SAIL helps students transform these distributed annotations into resources for collective sensemaking, classroom discussion, collaborative work, and knowledge creation.

Building on our earlier Synthesis Lab work (Zhu et al., 2023), SAIL highlights three key design components: 
- a Knowledge Synthesis Graph (Shui & Zhu, 2026): Helps students externalize, organize, and build on insights from social annotations. The graph is AI-generated and human-editable.(left panel). 
- an AI partner: Scaffolds the knowledge synthesis process by suggesting thematic links, surfacing conceptual gaps, and prompting reflection to engage in productive knowledge building activities (middle panel).  
- a Synthesis Editor: Integrates with the graph and AI partner to generate text-based syntheses from the graph, which students can further edit and refine (right panel).


These components help students organize ideas, notice patterns and gaps, reflect on connections, and develop coherent synthesis artifacts.

![SAIL interface screenshot](/images/projects/sail-screenshot.png)

## Publications

- [design] Zhu, X., Shui, B., Asnani, I., & Magee, L. (2026). [Designing an AI-augmented knowledge synthesis tool for collaborative learning](/docs/sail-cscl2026.pdf). In Proceedings of the 19th International Conference on Computer-Supported Collaborative Learning – CSCL 2026. International Society of the Learning Sciences.
- [technical] Shui, B. & Zhu, X. (2026). [Knowledge synthesis graph: An LLM-based approach for modeling student collaborative discourse](https://arxiv.org/abs/2602.06194). arXiv.
- [empirical] Zhu, X., Chen, B., & DeLiema, D. (2026). [Advancing collaborative discourse through knowledge synthesis](https://link.springer.com/article/10.1007/s11412-025-09463-6). International Journal of Computer-Supported Collaborative Learning, 1-31.
- [empirical] Zhu, X. & Chen, B. (2025). The Evolution of Shared Artifacts in CSCL: A Knowledge Synthesis Intervention for Productive Collaborative Discourse. In Oshima, J., Chen, B., Vogel, F., & Järvelä, J. (Eds.), Proceedings of the 18th International Conference on Computer-Supported Collaborative Learning - CSCL 2025 (pp. 286-290). International Society of the Learning Sciences.
- [design] Zhu, X., Shui, H., & Chen, B. (2023). The Synthesis Lab: Empowering collaborative learning in higher education through knowledge synthesis. Proceedings of Computer Supported Cooperative Work and Social Computing (CSCW’23 Companion) (pp. 245-248).
- [empirical] Chen, B., Zhu, X., & del Castillo, F. D. (2023). Integrating generative AI in knowledge building. Computers and Education: Artificial Intelligence, 100184.

### Funding

This project is supported by the Bureau of Educational Research (BER) in the College of Education and the Illinois Campus Research Board at UIUC.
