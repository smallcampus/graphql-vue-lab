export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
}


export interface Mutation {
   __typename?: 'Mutation';
  createProject: Project;
  updateProject: Project;
  deleteProject: Scalars['Boolean'];
}


export interface MutationCreateProjectArgs {
  input: ProjectInput;
}


export interface MutationUpdateProjectArgs {
  input: ProjectInput;
  id: Scalars['String'];
}


export interface MutationDeleteProjectArgs {
  id: Scalars['String'];
}

export interface Project {
   __typename?: 'Project';
  _id: Scalars['String'];
  name: Scalars['String'];
  createTime: Scalars['DateTime'];
  updateTime: Scalars['DateTime'];
}

export interface ProjectInput {
  name: Scalars['String'];
  description: Scalars['String'];
}

export interface Query {
   __typename?: 'Query';
  project: Project;
  projects: Array<Project>;
}


export interface QueryProjectArgs {
  id: Scalars['String'];
}


export interface QueryProjectsArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export type GetProjectDetailQueryVariables = {
  id: Scalars['String'];
};


export type GetProjectDetailQuery = (
  { __typename?: 'Query' }
  & { project: (
    { __typename?: 'Project' }
    & Pick<Project, '_id' | 'name'>
  ) }
);
