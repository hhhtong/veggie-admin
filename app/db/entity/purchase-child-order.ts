/**
 * 采购
 */
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import Goods from './goods';
import PurchaseOrder from './purchase-order';

@Entity()
export default class PurchaseChildOrder {
  /**
   * 采购的子订单编号 UUID 据此生成条形码
   */
  @PrimaryColumn('char', { length: 22 })
  purchaseNo: string;

  /**
   * 商品
   */
  @ManyToOne(type => Goods, goods => goods.purchaseChildOrder)
  goods: Goods;

  /**
   * 采购的主订单
   */
  @ManyToOne(type => PurchaseOrder, po => po.goodsCategory)
  purchaseOrder: PurchaseOrder;

  /**
   * 采购数量
   */
  @Column()
  purchaseNum: number;

  /**
   * 创建时间
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * 更新时间
   */
  @UpdateDateColumn()
  updatedAt: Date;
}