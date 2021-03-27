import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Sequelize, Model } from 'sequelize';
import sequelize from '../libs/db';

class Car extends Model {

  toJSON() {
    const origin = {
      id: this.id,
      name: this.name,
      price: this.price,
      summary: this.summary,
      image: this.image
    }
    return origin;
  }

}

Car.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,//主键
    autoIncrement: true//自增长
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  price: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  summary: {
    type: Sequelize.STRING(1000),
    allowNull: true
  },
  image: {
    type: Sequelize.STRING(100),
    allowNull: true
  }
},
  merge({
    tableName: 'car',
    modelName: 'car',
    sequelize
  },
    InfoCrudMixin.options
  )
)

export { Car };