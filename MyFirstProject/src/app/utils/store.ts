export class StoreUtils {
  static getIds(entities: Entity[]): number[] {
    return entities.map(entity => entity.id);
  }

  static normalize(entities: Entity[]): { [id: number]: any } {

    return entities.reduce((map, entity) => {
      return {...map, ...{[entity.id]: entity}};
    }, {});
  }


  static unnormalize(entities: { [id: number]: any }) {
    if (!entities) {
      return [];
    }
    return Object.keys(entities).map(id => entities[id]);
  }
}

export interface Entity {
  id: number;
}
