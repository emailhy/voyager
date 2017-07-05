import {FILTER_ADD, FILTER_MODIFY, FILTER_REMOVE} from '../../actions/filter';
import {Action} from '../../actions/index';
import {DEFAULT_SHELF_UNIT_SPEC, ShelfUnitSpec} from '../../models/shelf/spec';
import {insertItemToArray, modifyItemInArray, removeItemFromArray} from '../util';

export function filterReducer(shelfSpec: Readonly<ShelfUnitSpec> = DEFAULT_SHELF_UNIT_SPEC,
                              action: Action): ShelfUnitSpec {
  switch (action.type) {
    case FILTER_ADD: {
      const {filter, index} = action.payload;
      const filters = insertItemToArray(shelfSpec.filters, index, filter);
      return {
        ...shelfSpec,
        filters
      };
    }
    case FILTER_REMOVE: {
      const {index} = action.payload;
      const filters = removeItemFromArray(shelfSpec.filters, index).array;
      return {
        ...shelfSpec,
        filters
      };
    }
    case FILTER_MODIFY: {
      const {index, modifier} = action.payload;
      const filters = modifyItemInArray(shelfSpec.filters, index, modifier);
      return {
        ...shelfSpec,
        filters
      };
    }
    default: {
      return shelfSpec;
    }
  }
}
