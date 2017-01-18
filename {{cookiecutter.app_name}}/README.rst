{{cookiecutter.app_name}}
===

.. image:: https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}.svg?branch=master
   :target: https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}
   :alt: Build Status


Development
===

::

   python3 -m venv .venv
   source .venv/bin/activate
   pip install -r requirements-dev.txt
   pip install -e .
   yarn

Start two processes:

::

   yarn dev

To make webpack watch the frontend folder and rebuild the js bundle when files change.


::

   ./manage run

To run the app with the flask development server.


Tests
---

::

   pytest
   yarn test
