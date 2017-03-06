# acf-bootstrap4-page-builder
Demo of Page Builder Admin Page

This is just a demo of the work I'm doing working on flexible page layout builder.

At this point this is still an "Idea" but I needed to do some work on that "Idea" in order to
see just what can be done. It's one thing to imagine something in your head but it's a completely
differnt thing to actually see it.

In order to run this

1. You must have the most recent version of [ACF5 Pro](https://www.advancedcustomfields.com/pro/) Installed 
2. Import the field group file location in the /field-group-export/ folder
3. Install this plugin in your plugin folder and activate.

I would suggest that this be done on a test site and not something that is live. As it stands
this work will completely take over the Page admin of the site where it's installed.

This is just my working thoughts on the admin page for a page builder. It is rough.
Most of the fields are not completed and many of the fields and tabs that I've added
are at this time only "Thoughts", basically ideas for features the I may or may not
eventually add. Most of the work done so far revolves aroung making the admin page
a bit more user friendly and more well laid out than what you would get in a standard
ACF field group. You might notices one of two significant changes.

The most completed section is under Body => Rows => Columns.

I would be happy to entertain comments and questions in the issues here, but please keep 
in mind that I have a specific scope in mind for this idea and that I have no intention 
of going outside of that scope.

The scope is

1) A simple, yet powerfull page layout designer.
2) Nothing that is not part of building a page "layout" and "design" will be included. For example there are "containers", "rows" and "columns" in the layout. Anything about these items might be inlcuded, for example background images for each container.
3) Nothing pertaining to the "Content" that is included in a column will be managed. For example, this plugin will not provide any means of adding a "slider" into a container, row or column. That functionality would be controlled by some other system and "inserted" into a content editor using a shortcode.

Please also do not tell me that I should be doing it like XXX does it or that I should be 
building a drag and drop front end page builder. I have no interest. I've tried them and 
I personally find all the features and bloat confusing and irritating. Simple means, simple 
to learn and simple to use. Someone should be able to sit down and know what needs to be 
done just by looking at it. This is what people really need, and since I don't care if 
people don't "buy" my idea, then there's no reason for me to include things I don't want 
to include. If I've got to watch a half hour youtube video or spend 2 hours digging through 
documentation every time I want to do something then it is not simple.

Yes, requiring that people have a grasp of the Bootstrap grid system migh be considered 
complicated, but not for anyone that already has that grasp of basic grid systems for page
layouts. I don't care if someone that does not understand a basic grid system can't use it.

My main goal right now is to build the admin interface and not to do anything associated 
with taking the content layout of the content that is inserted and outputting an html page 
at this time. 

I would like to entertain the idea of the html page generation being modular. My personal 
goal is to have this builder produce pages that are compatible with the Bootstrap 4 Grid 
System (currently in alpha). But I am thinking that any compatible grid system could 
possibly be used. However, I am not going to completely rebuild or change the admin 
interface to contend with other systems and it would be up to others to do this and 
I would only add the necessary hooks to allow them to do so.

As of right now, this work is basically on hold due to the fact that Bootstrap 4 is not 
stable and I cannot really build anything concrete until it get to a point where features 
are not appearing and disappearing.

I have currently been focusing on other plugins that will support this admin. For example,
when there are many fields, especially repeaters with content editors in them, ACF can 
have a problem with this. To solve this problem I have created a plugin designed to 
prevent timeouts when saving complex pages build with ACF https://github.com/Hube2/acf-prevent-timeouts.

Something else I am currently working on is a set of generic JavaScript function for getting 
and updating that values in ACF fields on the admin page that will work in a similar fashion 
to the ACF functions get_field() and update_field(). This will help facilitate some of the
features I have planned for this project like copying and moving rows and columns.

Yet another project associated with this is a good shortcode plugin to allow for 
management of "Content Features" that are outside of the scope of this project.

This project itself is actually part of a bigger personal project that I am working on, 
and the end results of this project must fit the needs of that other project.

### Related projects

The following are projects that are separate to, but will contibute in some way to this project.

https://github.com/Hube2/acf-get-set-js - A JS API for getting and setting acf field values

https://github.com/Hube2/shortcodes-ultimate - a forked version of another plugin that will allow creating bootstrap 4 specific shortcodes


