/* eslint-disable */
export class User {
  sub: string
  names: string
  nickname: string
  picture: string
  updatedAt: string
  email: string
  emailVerified: string

  provider?: string
  id?: string

  givenName?: string
  familyName?: string
  locale?: string
  [key: string]: string | boolean | undefined

  constructor (auth0User: { [p: string]: string | boolean | undefined } | undefined) {
    if (!auth0User) return
    for (const key in auth0User) {
      this[key] = auth0User[key]
    }

    this.sub = auth0User.sub as string
    this.provider = this.sub.split('|')[0]
    this.id = this.sub.split('|')[1]
  }
}
