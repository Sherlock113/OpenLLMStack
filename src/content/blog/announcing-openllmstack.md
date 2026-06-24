---
title: "Announcing OpenLLMStack"
description: "Why I built OpenLLMStack and what you can expect: a single, curated hub for the open-source LLM ecosystem."
date: "2026-06-24"
author: "Sherlock Xu"
tags: ["Announcements", "Open Source"]
---

The open-source LLM ecosystem moves fast. New flagship models drop weekly, inference engines ship breakthrough optimizations, and agentic frameworks reinvent themselves overnight. Keeping up has become a full-time job, and the signal is scattered across model cards, GitHub repos, arXiv papers, Discord threads, and release blogs.

Today I'm launching **[OpenLLMStack](https://openllmstack.com)** to fix that: a single, curated hub for the entire open-source LLM stack.

## Why another site?

There's no shortage of AI news. What's missing is a place that's curated, current, and practical, one that answers the questions you actually have when you're building:

- Which open models are worth my attention right now?
- How big are they, what's the license, and what context window do they support?
- What does it actually take to *serve* one? Which GPUs, which inference engine?
- What are the techniques and frameworks I should know about?

OpenLLMStack is built to answer those questions at a glance, without the marketing fluff.

## What's inside

The site is organized around the layers of the modern open LLM stack:

- **[Models](/models)**: the latest open-weight LLMs, each with parameters, architecture (dense vs. MoE), context window, license, recommended GPU configurations, and one-click links to vLLM and SGLang deployment recipes.
- **[Inference](/inference)**: the engines and serving frameworks that run these models in production.
- **[Optimizations](/optimizations)**: the techniques that make inference faster and cheaper, from quantization to speculative decoding to prefix caching.
- **[Agents](/agents)**: the frameworks for building agentic applications on top of open models.
- **[Papers](/papers)**: the research that shaped the ecosystem, curated and summarized.
- **[Timeline](/timeline)**: an interactive view of the major milestones in open-source AI.

Every model card is designed to be *actionable*. You shouldn't have to dig through a README to find out whether a model fits on your hardware. It's right there on the card, alongside the exact recipes to deploy it.

## What's next

OpenLLMStack will grow alongside the ecosystem it tracks. Expect new models added as they ship, deeper deployment guides, and more research coverage. The whole project is open on [GitHub](https://github.com/Sherlock113/OpenLLMStack), so issues, suggestions, and contributions are all welcome.

> The best way to keep up with open-source AI is to build with it. I hope OpenLLMStack helps you do exactly that.

Thanks for reading, and welcome aboard.
