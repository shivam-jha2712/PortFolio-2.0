export default {
    name: 'experiencesedu',
    title: 'Experiencesedu',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'edu',
            title: 'Edu',
            type: 'array',
            of: [{ type: 'eduexperience' }]
        },
    ]
}