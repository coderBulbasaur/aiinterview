const { pgTable, serial, text, varchar } = require("drizzle-orm/pg-core")

// seriel imported from pg-core
// Table name is mockInterview and in curly bracket we define columns
// 'id' is column name inside our database and id is the typescript access to it as drizzle works on typesctipts
export const MockInterview = pgTable('mockInterview', {
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockId').notNull()
})
// this much column we want to add inside mockInterview table

// another table for record answer

export const UserAnswer = pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt')
})

//  run npm run db:push to push changes then run npm run db:studio again