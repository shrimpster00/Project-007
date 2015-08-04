/**
 * Created by Cayden on 8/1/2015.
 */
Template.menubutton.events({
    'click a': function(event) {
        if(document.getElementById("menu").style.visibility == "hidden"){
        	document.getElementById("menu").style.visibility = "visible";
        }
        else{
        	document.getElementById("menu").style.visibility = "hidden";
        }
        /*if(document.getElementById("topbar").style.visibility == "hidden"){
        	document.getElementById("topbar").style.visibility = "visible";
        }
        else{
        	document.getElementById("topbar").style.visibility = "hidden";
        }*/
        if(document.getElementById("bottombar").style.visibility == "hidden"){
        	document.getElementById("bottombar").style.visibility = "visible";
        }
        else{
        	document.getElementById("bottombar").style.visibility = "hidden";
        }
    }
});
Template.viewbutton.events({
    'click a': function(event) {
        alert('View!');
    }
});
Template.waypointbutton.events({
    'click a': function(event) {
        alert('Waypoint!');
    }
});

Template.viewport.helpers({
	screenwidth: function(){
		return window.innerWidth;
	},
	screenheight:function(){
		return window.innerHeight - 144;
	}
})