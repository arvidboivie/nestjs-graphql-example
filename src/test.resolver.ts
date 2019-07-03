import {
  Query,
  ResolveProperty,
  Resolver,
  Args,
  Parent,
  Context,
} from '@nestjs/graphql';
import { Test } from './graphql.schema';

@Resolver('Test')
export class TestResolver {
  @Query('test')
  async getTests(
    @Args('number') number: number,
  ): Promise<Test[]> {
    const result: Test[] = [];
    while (number > 0) {
      const test = new Test();
      //test.value = 'test';
      result.push(test);
      number--;
    }
    console.log(result);
    return result;
  }

  @ResolveProperty('value')
  resolveValue(
    //@Parent() test: Test,
    //@Context() context: any
  ) {
    return 'test';
  }
}
