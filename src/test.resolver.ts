import { Args, Context, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';

import { Test } from './graphql.schema';

@Resolver("Test")
export class TestResolver {
  @Query("test")
  async getTests(@Args("number") number: number): Promise<Test[]> {
    const result: Test[] = new Array(number);

    result.fill(new Test());

    return result;
  }

  @ResolveProperty()
  standardResolver(parent: Test, args: any, context: any) {
    return "test";
  }

  @ResolveProperty()
  decoratorResolver(@Parent() test: Test, @Context() context: any) {
    return "test";
  }
}
