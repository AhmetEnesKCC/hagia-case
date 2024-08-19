import { z } from 'zod';
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
export const NewsScalarFieldEnumSchema = z.enum(['id', 'title', 'date', 'description', 'image', 'analyze', 'createdAt', 'updatedAt']);
export const SortOrderSchema = z.enum(['asc', 'desc']);
export const QueryModeSchema = z.enum(['default', 'insensitive']);
export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// NEWS SCHEMA
/////////////////////////////////////////
export const NewsSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    analyze: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////
// NEWS
//------------------------------------------------------
export const NewsSelectSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    date: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    analyze: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
export const NewsWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => NewsWhereInputSchema), z.lazy(() => NewsWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => NewsWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => NewsWhereInputSchema), z.lazy(() => NewsWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    date: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    image: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    analyze: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();
export const NewsOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    analyze: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const NewsWhereUniqueInputSchema = z.union([
    z.object({
        id: z.number().int(),
        title: z.string()
    }),
    z.object({
        id: z.number().int(),
    }),
    z.object({
        title: z.string(),
    }),
])
    .and(z.object({
    id: z.number().int().optional(),
    title: z.string().optional(),
    AND: z.union([z.lazy(() => NewsWhereInputSchema), z.lazy(() => NewsWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => NewsWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => NewsWhereInputSchema), z.lazy(() => NewsWhereInputSchema).array()]).optional(),
    date: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    image: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    analyze: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict());
export const NewsOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    analyze: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => NewsCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => NewsAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => NewsMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => NewsMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => NewsSumOrderByAggregateInputSchema).optional()
}).strict();
export const NewsScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => NewsScalarWhereWithAggregatesInputSchema), z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => NewsScalarWhereWithAggregatesInputSchema), z.lazy(() => NewsScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    date: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    image: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    analyze: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();
export const NewsCreateInputSchema = z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    analyze: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const NewsUncheckedCreateInputSchema = z.object({
    id: z.number().int().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    analyze: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const NewsUpdateInputSchema = z.object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    analyze: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const NewsUncheckedUpdateInputSchema = z.object({
    id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    analyze: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const NewsCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    analyze: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const NewsUpdateManyMutationInputSchema = z.object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    analyze: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const NewsUncheckedUpdateManyInputSchema = z.object({
    id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    analyze: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const IntFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();
export const StringFilterSchema = z.object({
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
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();
export const StringNullableFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
export const DateTimeFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();
export const SortOrderInputSchema = z.object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();
export const NewsCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    analyze: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const NewsAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const NewsMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    analyze: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const NewsMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    analyze: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const NewsSumOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const IntWithAggregatesFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
export const StringWithAggregatesFilterSchema = z.object({
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
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const StringNullableWithAggregatesFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
export const DateTimeWithAggregatesFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
export const StringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional().nullable()
}).strict();
export const DateTimeFieldUpdateOperationsInputSchema = z.object({
    set: z.coerce.date().optional()
}).strict();
export const IntFieldUpdateOperationsInputSchema = z.object({
    set: z.number().optional(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional()
}).strict();
export const NestedIntFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();
export const NestedStringFilterSchema = z.object({
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
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();
export const NestedStringNullableFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
export const NestedDateTimeFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();
export const NestedIntWithAggregatesFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
export const NestedFloatFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
}).strict();
export const NestedStringWithAggregatesFilterSchema = z.object({
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
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const NestedStringNullableWithAggregatesFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
export const NestedIntNullableFilterSchema = z.object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
export const NestedDateTimeWithAggregatesFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
export const NewsFindFirstArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereInputSchema.optional(),
    orderBy: z.union([NewsOrderByWithRelationInputSchema.array(), NewsOrderByWithRelationInputSchema]).optional(),
    cursor: NewsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([NewsScalarFieldEnumSchema, NewsScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const NewsFindFirstOrThrowArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereInputSchema.optional(),
    orderBy: z.union([NewsOrderByWithRelationInputSchema.array(), NewsOrderByWithRelationInputSchema]).optional(),
    cursor: NewsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([NewsScalarFieldEnumSchema, NewsScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const NewsFindManyArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereInputSchema.optional(),
    orderBy: z.union([NewsOrderByWithRelationInputSchema.array(), NewsOrderByWithRelationInputSchema]).optional(),
    cursor: NewsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([NewsScalarFieldEnumSchema, NewsScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const NewsAggregateArgsSchema = z.object({
    where: NewsWhereInputSchema.optional(),
    orderBy: z.union([NewsOrderByWithRelationInputSchema.array(), NewsOrderByWithRelationInputSchema]).optional(),
    cursor: NewsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const NewsGroupByArgsSchema = z.object({
    where: NewsWhereInputSchema.optional(),
    orderBy: z.union([NewsOrderByWithAggregationInputSchema.array(), NewsOrderByWithAggregationInputSchema]).optional(),
    by: NewsScalarFieldEnumSchema.array(),
    having: NewsScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const NewsFindUniqueArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereUniqueInputSchema,
}).strict();
export const NewsFindUniqueOrThrowArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereUniqueInputSchema,
}).strict();
export const NewsCreateArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    data: z.union([NewsCreateInputSchema, NewsUncheckedCreateInputSchema]),
}).strict();
export const NewsUpsertArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereUniqueInputSchema,
    create: z.union([NewsCreateInputSchema, NewsUncheckedCreateInputSchema]),
    update: z.union([NewsUpdateInputSchema, NewsUncheckedUpdateInputSchema]),
}).strict();
export const NewsCreateManyArgsSchema = z.object({
    data: z.union([NewsCreateManyInputSchema, NewsCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const NewsCreateManyAndReturnArgsSchema = z.object({
    data: z.union([NewsCreateManyInputSchema, NewsCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const NewsDeleteArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    where: NewsWhereUniqueInputSchema,
}).strict();
export const NewsUpdateArgsSchema = z.object({
    select: NewsSelectSchema.optional(),
    data: z.union([NewsUpdateInputSchema, NewsUncheckedUpdateInputSchema]),
    where: NewsWhereUniqueInputSchema,
}).strict();
export const NewsUpdateManyArgsSchema = z.object({
    data: z.union([NewsUpdateManyMutationInputSchema, NewsUncheckedUpdateManyInputSchema]),
    where: NewsWhereInputSchema.optional(),
}).strict();
export const NewsDeleteManyArgsSchema = z.object({
    where: NewsWhereInputSchema.optional(),
}).strict();
