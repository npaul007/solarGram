Images = new FS.Collection("images",{
	stores:[new FS.Store.FileSystem("images",{path:"pictures"})],
	filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

Meteor.publish('pictures',function(){
	return Images.find();
});

Images.deny({
 insert: function(){
	 return false;
 },
 update: function(){
	 return false;
 },
 remove: function(){
	 return false;
 },
 download: function(){
	 return false;
 }
});

Images.allow({
 insert: function(){
	 return true;
 },
 update: function(){
	 return true;
 },
 remove: function(){
	 return true;
 },
 download: function(){
	 return true;
 }
});




