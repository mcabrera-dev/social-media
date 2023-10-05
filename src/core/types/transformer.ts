export interface Transformer<Entity, TransformedEntity> {
  transform(entity: Entity): TransformedEntity;
}
