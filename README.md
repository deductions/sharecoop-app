# sharecoop-app
Web application for Sharecoop

Contrairement au projet
https://github.com/deductions/semantic_forms-sharecop
(périmé),
cette application se contente du serveur de la distribution générique de semantic_forms;
on n'a pas besoin de compiler,
tout est fait en HTML, CSS, et JS.

cf https://github.com/jmvanel/semantic_forms/wiki/Application-development-manual#client-side-with-sf-web-services-api

## Démarrer

- cloner avec git
- telécharger la distribution `semantic_form`
- dézipper la distribution `semantic_form`
- dans une console:
```
cd semantic_forms_play-1.0-SNAPSHOT
 mv files files_orig
 ln -s ../files/ .
 bin/semantic_forms_play &
```
- lancer avec le navigateur
[http://localhost:9000/files/sharecoop`_app.html](http://localhost:9000/files/sharecoop_app.html)

