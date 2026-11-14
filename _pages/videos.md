---
layout: page
permalink: /videos/
title: videos
description: Recorded talks.
nav: true
nav_order: 4
---

<script src="https://slideslive.com/embed_presentation.js"></script>

{% for v in site.data.videos %}

<div class="video-entry mb-5">
  <h4 class="mb-1">{{ v.title }}</h4>
  <p class="text-muted mb-2">
    {{ v.event }}{% if v.paper %} · <a href="{{ v.paper }}">paper</a>{% endif %}{% if v.slideslive %} · <a href="https://slideslive.com/{{ v.slideslive }}">watch on SlidesLive</a>{% endif %}
  </p>
  {% if v.slideslive %}
  <div id="presentation-embed-{{ v.slideslive }}"></div>
  <script>
    new SlidesLiveEmbed("presentation-embed-{{ v.slideslive }}", {
      presentationId: "{{ v.slideslive }}",
      autoPlay: false,
      verticalEnabled: true,
    });
  </script>
  {% elsif v.youtube %}
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/{{ v.youtube }}" title="{{ v.title }}" allowfullscreen loading="lazy"></iframe>
  </div>
  {% endif %}
</div>
{% endfor %}
