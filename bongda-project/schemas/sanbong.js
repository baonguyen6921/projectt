export default {
    name: 'sanbong',
    type: 'document',
    title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'San Bong Name',
        validation: rule => rule.required()
      },
      {
        name: 'address',
        type: 'string',
        title: 'San Bong Address',
        validation: rule => rule.required()
      },
      {
        name:'image',
        type:'image',
        title:'Image for San Bong',
      }

    ]
  }