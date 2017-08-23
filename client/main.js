import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {People} from './people.js';
import './main.html';
import './people.js';

Template.main.helpers({
	demo_template(){
		return People.find({});
	}
});
Template.demo_template.events({
  'submit.new-task'(event) {
    // Insert a task into the collection
    People.insert({
      text,
      createdAt: new Date(), // current time
    });
  },
});