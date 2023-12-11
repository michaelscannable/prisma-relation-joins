type ScalarField = {
  name: string;
  type: string;
};
type ObjectField = ScalarField & {
  relationFromFields: string[];
  relationToFields: string[];
};
type Inflection = {
  modelName?: (name: string) => string;
  scalarField?: (field: ScalarField) => string;
  parentField?: (field: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  childField?: (field: ObjectField, oppositeField: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  oppositeBaseNameMap?: Record<string, string>;
};
type Override = {
  _prisma_migrations?: {
    name?: string;
    fields?: {
      id?: string;
      checksum?: string;
      finished_at?: string;
      migration_name?: string;
      logs?: string;
      rolled_back_at?: string;
      started_at?: string;
      applied_steps_count?: string;
    };
  }
  inspections?: {
    name?: string;
    fields?: {
      id?: string;
      created_at?: string;
      updated_at?: string;
      name_of_inspector?: string;
      passed?: string;
      productId?: string;
      notes?: string;
      products?: string;
    };
  }
  products?: {
    name?: string;
    fields?: {
      id?: string;
      created_at?: string;
      updated_at?: string;
      name?: string;
      code?: string;
      serial_number?: string;
      userId?: string;
      users?: string;
      inspections?: string;
    };
  }
  users?: {
    name?: string;
    fields?: {
      id?: string;
      created_at?: string;
      updated_at?: string;
      email?: string;
      name?: string;
      products?: string;
    };
  }}
export type Alias = {
  inflection?: Inflection | boolean;
  override?: Override;
};
interface BlueprintRelationField {
  count?: number | MinMaxOption;
}
interface BlueprintJsonField {
  schema?: any;
}
interface BlueprintDateField {
  options?: {
    minYear?: number;
    maxYear?: number;
  }
}
export interface Blueprint {
  _prisma_migrations?: {

  }
  inspections?: {
    products?: BlueprintRelationField;
  }
  products?: {
    users?: BlueprintRelationField;
    inspections?: BlueprintRelationField;
  }
  users?: {
    products?: BlueprintRelationField;
  }}