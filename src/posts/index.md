---
title: "All Posts"
layout: base.njk
---

{%- block content %}
# All Posts
<ul>
{%- set posts = collections.posts | slice(0, 50) %}
  {%- for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title or post.fileSlug }}</a>
      {%- if post.title %}
        <span style="color:#888;font-size:0.95em;">
          ({{ post.date | dateToRfc3339 | slice(0,10) }})
        </span>
      {%- endif %}
    </li>
  {%- endfor %}
</ul>
{%- endblock %}
