import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  
  pathForType() {
     /*
      https://guides.emberjs.com/v2.0.0/models/customizing-adapters/#toc_path-customization
    */
    return "topstories";
  }

});