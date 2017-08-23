import {mongo} from 'meteor/mongo';
export const People= new Mongo.collection('people');

Template.employee.events({
	'submit .employee' : function(e){
		e.preventDefault();
		people.insert({
			f_name: $(".f_name").val(),
		});
	}
});
Template.data.people=function(){
	
}