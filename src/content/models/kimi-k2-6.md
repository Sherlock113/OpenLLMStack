---
name: "Kimi-K2.6"
org: "Moonshot AI"
logo: "/logos/kimi.webp"
params: "1T (32B active)"
license: "Modified MIT"
releaseDate: "2026-04"
description: "1T MoE model with 256K context and native multimodal support (text, image, video). Built for multimodal long-context agents and visual reasoning. INT4 precision."
url: "https://huggingface.co/moonshotai/Kimi-K2.6"
tags: ["MoE", "Multimodal", "256K context"]
family: "Kimi"
architecture: "MoE"
activeParams: "32B"
contextLength: "256K"
modality: "Multimodal"
modalityNote: "Text, Image, Video"
precisions: ["INT4"]
deployment: ["8× H200", "8× B300", "4× MI350X"]
useCase: "Multimodal long-context agents and visual reasoning"
huggingfacePath: "moonshotai/Kimi-K2.6"
intro: "Kimi-K2.6 is Moonshot AI's open-weight, native multimodal agentic model. Built on a 1T-parameter MoE with 32B active per token, it supports text, image, and video inputs with a 256K context window. K2.6 is designed for long-horizon agentic work: 12-hour autonomous coding sessions, agent swarms scaling to 300 domain-specialized sub-agents, and up to 4,000 coordinated steps in a single autonomous run."
vllmRecipe: "https://recipes.vllm.ai/moonshotai/Kimi-K2.6"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K2.6"
releaseBlog: "https://kimi-k2.org/blog/24-kimi-k2-6-release"
blogPosts:
  - title: "Moonshot AI Releases Kimi K2.6 with Long-Horizon Coding, Agent Swarm Scaling to 300 Sub-Agents"
    url: "https://www.marktechpost.com/2026/04/20/moonshot-ai-releases-kimi-k2-6-with-long-horizon-coding-agent-swarm-scaling-to-300-sub-agents-and-4000-coordinated-steps/"
  - title: "Kimi K2.6 Model Overview: Architecture, Features & Capabilities"
    url: "https://deepinfra.com/blog/kimi-k2-6-model-overview"
  - title: "Kimi K2.6 Has Arrived: An Open-Weight Powerhouse for Agentic Work"
    url: "https://blog.kilo.ai/p/kimi-k26-has-arrived-an-open-weight"
---
