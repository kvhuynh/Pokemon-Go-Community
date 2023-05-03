import { AllowNull, AutoIncrement, BeforeCreate, Column, CreatedAt, DataType, Model, Table, UpdatedAt, HasMany, Length } from 'sequelize-typescript';

const bcrypt = require("bcrypt");

@Table({tableName: 'users'})
export class User extends Model {

  @AllowNull(false)
  @AutoIncrement
  @Column({primaryKey: true})
  id: number

  @Column({
    field: "first_name",
    validate: {
      notEmpty: {
        msg: "First name is required"
      }
    }
  })
  firstName: string

  @Column({
    field: "last_name",
    validate: {
      notEmpty: {
        msg: "Last name is required"
      }
    }
    })
  lastName: string

  @Column({
    field: "email",
    validate: {
      isEmail: {
        msg: "Email is not in a valid format"
      },
      notEmpty: {
        msg: "Email is required"
      }
    },
    unique: true
  })
  email: string

  @Column({
    field: "password",
    allowNull: false,
    validate: {
        notEmpty: {
            msg: "Password is required"
        },
        len: {
          args: [8, 50],
          msg: "Password must be between 8 and 50 characters"
        },
        hashPassword() {
          if (this.password === this.confirmPassword) {
            this.password = bcrypt.hashSync(this.confirmPassword, 10);
        } else {
            throw new Error("passwords must match")
        }
        }
    }})
    password: string

  @Column(DataType.VIRTUAL)
  confirmPassword: string

  // @HasMany(() => Budget)
  // budgets: Budget[];

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

};
