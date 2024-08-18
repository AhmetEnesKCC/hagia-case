import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const NewsScalarFieldEnumSchema = z.enum(['id','title','description','image','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// NEWS SCHEMA
/////////////////////////////////////////

export const NewsSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type News = z.infer<typeof NewsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// NEWS
//------------------------------------------------------

export const NewsSelectSchema: z.ZodType<Prisma.NewsSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const NewsWhereInputSchema: z.ZodType<Prisma.NewsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NewsWhereInputSchema),z.lazy(() => NewsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NewsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NewsWhereInputSchema),z.lazy(() => NewsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NewsOrderByWithRelationInputSchema: z.ZodType<Prisma.NewsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NewsWhereUniqueInputSchema: z.ZodType<Prisma.NewsWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => NewsWhereInputSchema),z.lazy(() => NewsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NewsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NewsWhereInputSchema),z.lazy(() => NewsWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const NewsOrderByWithAggregationInputSchema: z.ZodType<Prisma.NewsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NewsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => NewsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NewsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NewsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => NewsSumOrderByAggregateInputSchema).optional()
}).strict();

export const NewsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NewsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NewsScalarWhereWithAggregatesInputSchema),z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NewsScalarWhereWithAggregatesInputSchema),z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NewsCreateInputSchema: z.ZodType<Prisma.NewsCreateInput> = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NewsUncheckedCreateInputSchema: z.ZodType<Prisma.NewsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NewsUpdateInputSchema: z.ZodType<Prisma.NewsUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NewsUncheckedUpdateInputSchema: z.ZodType<Prisma.NewsUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NewsCreateManyInputSchema: z.ZodType<Prisma.NewsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NewsUpdateManyMutationInputSchema: z.ZodType<Prisma.NewsUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NewsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NewsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NewsCountOrderByAggregateInputSchema: z.ZodType<Prisma.NewsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NewsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.NewsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NewsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NewsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NewsMinOrderByAggregateInputSchema: z.ZodType<Prisma.NewsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NewsSumOrderByAggregateInputSchema: z.ZodType<Prisma.NewsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const NewsFindFirstArgsSchema: z.ZodType<Prisma.NewsFindFirstArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereInputSchema.optional(),
  orderBy: z.union([ NewsOrderByWithRelationInputSchema.array(),NewsOrderByWithRelationInputSchema ]).optional(),
  cursor: NewsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NewsScalarFieldEnumSchema,NewsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NewsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NewsFindFirstOrThrowArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereInputSchema.optional(),
  orderBy: z.union([ NewsOrderByWithRelationInputSchema.array(),NewsOrderByWithRelationInputSchema ]).optional(),
  cursor: NewsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NewsScalarFieldEnumSchema,NewsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NewsFindManyArgsSchema: z.ZodType<Prisma.NewsFindManyArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereInputSchema.optional(),
  orderBy: z.union([ NewsOrderByWithRelationInputSchema.array(),NewsOrderByWithRelationInputSchema ]).optional(),
  cursor: NewsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NewsScalarFieldEnumSchema,NewsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NewsAggregateArgsSchema: z.ZodType<Prisma.NewsAggregateArgs> = z.object({
  where: NewsWhereInputSchema.optional(),
  orderBy: z.union([ NewsOrderByWithRelationInputSchema.array(),NewsOrderByWithRelationInputSchema ]).optional(),
  cursor: NewsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NewsGroupByArgsSchema: z.ZodType<Prisma.NewsGroupByArgs> = z.object({
  where: NewsWhereInputSchema.optional(),
  orderBy: z.union([ NewsOrderByWithAggregationInputSchema.array(),NewsOrderByWithAggregationInputSchema ]).optional(),
  by: NewsScalarFieldEnumSchema.array(),
  having: NewsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NewsFindUniqueArgsSchema: z.ZodType<Prisma.NewsFindUniqueArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereUniqueInputSchema,
}).strict() ;

export const NewsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NewsFindUniqueOrThrowArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereUniqueInputSchema,
}).strict() ;

export const NewsCreateArgsSchema: z.ZodType<Prisma.NewsCreateArgs> = z.object({
  select: NewsSelectSchema.optional(),
  data: z.union([ NewsCreateInputSchema,NewsUncheckedCreateInputSchema ]),
}).strict() ;

export const NewsUpsertArgsSchema: z.ZodType<Prisma.NewsUpsertArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereUniqueInputSchema,
  create: z.union([ NewsCreateInputSchema,NewsUncheckedCreateInputSchema ]),
  update: z.union([ NewsUpdateInputSchema,NewsUncheckedUpdateInputSchema ]),
}).strict() ;

export const NewsCreateManyArgsSchema: z.ZodType<Prisma.NewsCreateManyArgs> = z.object({
  data: z.union([ NewsCreateManyInputSchema,NewsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NewsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NewsCreateManyAndReturnArgs> = z.object({
  data: z.union([ NewsCreateManyInputSchema,NewsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NewsDeleteArgsSchema: z.ZodType<Prisma.NewsDeleteArgs> = z.object({
  select: NewsSelectSchema.optional(),
  where: NewsWhereUniqueInputSchema,
}).strict() ;

export const NewsUpdateArgsSchema: z.ZodType<Prisma.NewsUpdateArgs> = z.object({
  select: NewsSelectSchema.optional(),
  data: z.union([ NewsUpdateInputSchema,NewsUncheckedUpdateInputSchema ]),
  where: NewsWhereUniqueInputSchema,
}).strict() ;

export const NewsUpdateManyArgsSchema: z.ZodType<Prisma.NewsUpdateManyArgs> = z.object({
  data: z.union([ NewsUpdateManyMutationInputSchema,NewsUncheckedUpdateManyInputSchema ]),
  where: NewsWhereInputSchema.optional(),
}).strict() ;

export const NewsDeleteManyArgsSchema: z.ZodType<Prisma.NewsDeleteManyArgs> = z.object({
  where: NewsWhereInputSchema.optional(),
}).strict() ;