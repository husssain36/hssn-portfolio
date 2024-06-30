export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
    name: "projectTitle",
    title: "ProjectTitle",
    type: "string"
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}],
    },
    {
      name: "summary",
      title: "Summary",
      type: "text"
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    },
  ],

}
