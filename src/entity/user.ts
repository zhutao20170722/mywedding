/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-11-13 23:54:50
 * @LastEditTime: 2022-11-14 00:58:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \node-server\src\entity\user.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length, IsEmail } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 80
  })
  @Length(10, 80)
  name: string

  @Column({
    length: 100
  })
  @Length(10, 100)
  @IsEmail()
  email: string
}

export const userSchema = {
  id: { type: 'number', required: true, example: 1 },
  name: { type: 'string', required: true, example: 'Javier' },
  email: { type: 'string', required: true, example: 'avileslopez.javier@gmail.com' }
}
