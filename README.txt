/* $Id$ */

docReader provides an formatter to the CCK module Filefield. When enabled and used as a formatter, this module outputs a second link next the normal one that you normally would see in filefield. The second link goto Readspeakers docReader page that are able to read the text for you with a computerized/recorded voice in a vareity of languages. You will need an account at Readspekaer to use this service.

docReader was written by Fredric Bergström (bobodrone).


Dependencies:

 * Content
 * Filefield


Install:

1) Copy the docreader folder to the modules folder in your installation.

2) Enable the module using Administer -> Site building -> Modules
   (/admin/build/modules).

3) Create a new file field in through CCK's interface. Visit Administer ->
   Content management -> Content types (admin/content/types), then click
   Manage fields on the type you want to add an file upload field. Select
   "File" as the field type and "File" as the widget type to create a new
   field.

4) Click the Display fields tab and choose "docReader files" in the select lists for Teaser or Full Node.

5) Goto Site configuration > docReader settings and choose voice language and provide your docReader ID.

6) Upload files on the node form for the type that you set up.
