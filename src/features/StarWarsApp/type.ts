export type StarWarsApiPayload = {
  page:number
}

export type SearchStarWarsPayload = {
  searchText:string
}

export type StarWarsPeopleApi = {
  name: string
  height: number
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender:string
  }

  // export type StarWarsPeopleApi = {
  //     count:number
  //     results: Array<{
  //     name: string
  //     height: number
  //     mass: number
  //     hair_color: string
  //     skin_color: string
  //     eye_color: string
  //     birth_year: string
  //     gender:string
  //   }>
  // }
    