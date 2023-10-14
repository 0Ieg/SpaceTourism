import { createSlice } from "@reduxjs/toolkit";
import vg from '../images/vg.png'
import bo from '../images/bo.png'
import sx from '../images/sx.png'

const initialState = {
  virginGalactic: {
    image: vg,
    name: 'Virgin Galactic',
    achievement: 'Cуборбитальный полет',
    news:{
      new1: 'Компания Virgin Galactic 11 июля 2021 осуществила первый "туристический" суборбитальный полет со своим основателем, британским миллиардером Ричардом Брэнсоном на борту.',
      new2: 'Корабль "Unity 22" стартовал с космического порта "Америка" в штате Нью-Мексико с помощью самолета-носителя VMS Eve. Позже он отсоединился от самолета-носителя.',
      new3: 'Руководство Virgin Galactic надеется, что массовые суборбитальные космические полеты начнутся до 2022 года. '
    },
    tableData:{
      travel: ['1','час'],
      distance: ['80','км'],
      weightlessness: ['4-5','мин'],
      price: ['250','тыс.дол'],
      chance: ['99','%']
    }
  },
  blueOrigin: {
    image: bo,
    name: 'Blue Origin',
    achievement: 'Суборбитальный полет',
    news:{
      new1: 'Суборбитальные ракета New Shepard компании Blue Origin 20 июля 2021года впервые в истории компании вывела на космическую высоту капсулу с людьми, с самым богатым человеком мира Джеффом  Безосом на борту.',
      new2: 'New Shepard высотой 18 м и шириной 4 м - многоразовый космический аппарат. Бустерная установка поднимает герметичное пассажирское судно на высоту около 76 км. Импульс преподносит капсулу вверх в космос. ',
      new3: 'После этого она опускается на землю под тремя парашютами. Ракета-носитель тоже возвращается домой.'
    },
    tableData:{
      travel: ['10','мин'],
      distance: ['100','км'],
      weightlessness: ['4-5','мин'],
      price: ['250','тыс.дол'],
      chance: ['99','%']
    }
  },
  spaceX: {
    image: sx,
    name: 'SpaceX',
    achievement: 'А может на Луну или Марс?',
    news:{
      new1: 'В 2016 году на 67-м ежегодном Международном конгрессе астронавтики Илон Маск заявил, что оптимистичный временной график предусматривает первый полет к Марсу в 2022 году (доставка груза).',
      new2: 'Полет с экипажем - в 2024 году.На Красную планету экипаж прибудет в 2025-26 году."Я начал SpaceX, потому что хотел помочь снизить стоимость космических перевозок, чтобы основать жизни на другой планете".',
      new3: 'Если все пойдет по плану, то благодаря Маск к 2050 году жителями Красной планеты смогут себя назвать около миллиона человек. Туда их доставит флотилия из тысячи кораблей Starship.'
    },
    tableData:{
      travel: ['150','дней'],
      distance: ['55','млн.км'],
      weightlessness: ['много','мин'],
      price: ['10','млрд.дол'],
      chance: ['1','%']
    }
  }
}
export type CompanyType = typeof initialState.virginGalactic

const slice = createSlice({
  name: 'aboutUS',
  initialState: initialState,
  reducers: {
    getData: (state, action)=>{
      return state
    }
  }
})

export const aboutUsReducer = slice.reducer
export const { getData } = slice.actions


