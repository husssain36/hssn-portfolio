export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
      name: "Title",
      title: "Title",
      type: "string"
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "progress",
        title: "Progress",
        type: "number",
        description: "Progress of Skill from 0 to 100%",
        validation: (Rule) => Rule.min(0).max(100),
      },
      
    ],
  
  }
  