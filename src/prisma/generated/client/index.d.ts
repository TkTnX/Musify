
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model LikedSongs
 * 
 */
export type LikedSongs = $Result.DefaultSelection<Prisma.$LikedSongsPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model LikedArtists
 * 
 */
export type LikedArtists = $Result.DefaultSelection<Prisma.$LikedArtistsPayload>
/**
 * Model LikedAlbums
 * 
 */
export type LikedAlbums = $Result.DefaultSelection<Prisma.$LikedAlbumsPayload>
/**
 * Model PlaylistSongs
 * 
 */
export type PlaylistSongs = $Result.DefaultSelection<Prisma.$PlaylistSongsPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.likedSongs`: Exposes CRUD operations for the **LikedSongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedSongs
    * const likedSongs = await prisma.likedSongs.findMany()
    * ```
    */
  get likedSongs(): Prisma.LikedSongsDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;

  /**
   * `prisma.likedArtists`: Exposes CRUD operations for the **LikedArtists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedArtists
    * const likedArtists = await prisma.likedArtists.findMany()
    * ```
    */
  get likedArtists(): Prisma.LikedArtistsDelegate<ExtArgs>;

  /**
   * `prisma.likedAlbums`: Exposes CRUD operations for the **LikedAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedAlbums
    * const likedAlbums = await prisma.likedAlbums.findMany()
    * ```
    */
  get likedAlbums(): Prisma.LikedAlbumsDelegate<ExtArgs>;

  /**
   * `prisma.playlistSongs`: Exposes CRUD operations for the **PlaylistSongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistSongs
    * const playlistSongs = await prisma.playlistSongs.findMany()
    * ```
    */
  get playlistSongs(): Prisma.PlaylistSongsDelegate<ExtArgs>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Playlist: 'Playlist',
    Album: 'Album',
    Song: 'Song',
    LikedSongs: 'LikedSongs',
    Artist: 'Artist',
    LikedArtists: 'LikedArtists',
    LikedAlbums: 'LikedAlbums',
    PlaylistSongs: 'PlaylistSongs',
    Video: 'Video'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "playlist" | "album" | "song" | "likedSongs" | "artist" | "likedArtists" | "likedAlbums" | "playlistSongs" | "video"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      LikedSongs: {
        payload: Prisma.$LikedSongsPayload<ExtArgs>
        fields: Prisma.LikedSongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedSongsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedSongsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          findFirst: {
            args: Prisma.LikedSongsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedSongsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          findMany: {
            args: Prisma.LikedSongsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>[]
          }
          create: {
            args: Prisma.LikedSongsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          createMany: {
            args: Prisma.LikedSongsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedSongsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>[]
          }
          delete: {
            args: Prisma.LikedSongsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          update: {
            args: Prisma.LikedSongsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          deleteMany: {
            args: Prisma.LikedSongsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedSongsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikedSongsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongsPayload>
          }
          aggregate: {
            args: Prisma.LikedSongsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedSongs>
          }
          groupBy: {
            args: Prisma.LikedSongsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedSongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedSongsCountArgs<ExtArgs>
            result: $Utils.Optional<LikedSongsCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      LikedArtists: {
        payload: Prisma.$LikedArtistsPayload<ExtArgs>
        fields: Prisma.LikedArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedArtistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedArtistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          findFirst: {
            args: Prisma.LikedArtistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedArtistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          findMany: {
            args: Prisma.LikedArtistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>[]
          }
          create: {
            args: Prisma.LikedArtistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          createMany: {
            args: Prisma.LikedArtistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedArtistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>[]
          }
          delete: {
            args: Prisma.LikedArtistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          update: {
            args: Prisma.LikedArtistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          deleteMany: {
            args: Prisma.LikedArtistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedArtistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikedArtistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedArtistsPayload>
          }
          aggregate: {
            args: Prisma.LikedArtistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedArtists>
          }
          groupBy: {
            args: Prisma.LikedArtistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedArtistsCountArgs<ExtArgs>
            result: $Utils.Optional<LikedArtistsCountAggregateOutputType> | number
          }
        }
      }
      LikedAlbums: {
        payload: Prisma.$LikedAlbumsPayload<ExtArgs>
        fields: Prisma.LikedAlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedAlbumsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findFirst: {
            args: Prisma.LikedAlbumsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedAlbumsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findMany: {
            args: Prisma.LikedAlbumsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>[]
          }
          create: {
            args: Prisma.LikedAlbumsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          createMany: {
            args: Prisma.LikedAlbumsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedAlbumsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>[]
          }
          delete: {
            args: Prisma.LikedAlbumsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          update: {
            args: Prisma.LikedAlbumsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          deleteMany: {
            args: Prisma.LikedAlbumsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedAlbumsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikedAlbumsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          aggregate: {
            args: Prisma.LikedAlbumsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedAlbums>
          }
          groupBy: {
            args: Prisma.LikedAlbumsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedAlbumsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedAlbumsCountArgs<ExtArgs>
            result: $Utils.Optional<LikedAlbumsCountAggregateOutputType> | number
          }
        }
      }
      PlaylistSongs: {
        payload: Prisma.$PlaylistSongsPayload<ExtArgs>
        fields: Prisma.PlaylistSongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistSongsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistSongsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          findFirst: {
            args: Prisma.PlaylistSongsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistSongsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          findMany: {
            args: Prisma.PlaylistSongsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>[]
          }
          create: {
            args: Prisma.PlaylistSongsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          createMany: {
            args: Prisma.PlaylistSongsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistSongsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>[]
          }
          delete: {
            args: Prisma.PlaylistSongsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          update: {
            args: Prisma.PlaylistSongsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistSongsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistSongsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistSongsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongsPayload>
          }
          aggregate: {
            args: Prisma.PlaylistSongsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistSongs>
          }
          groupBy: {
            args: Prisma.PlaylistSongsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistSongsCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongsCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    playlists: number
    likedSongs: number
    songs: number
    likedArtists: number
    likedAlbums: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    likedSongs?: boolean | UserCountOutputTypeCountLikedSongsArgs
    songs?: boolean | UserCountOutputTypeCountSongsArgs
    likedArtists?: boolean | UserCountOutputTypeCountLikedArtistsArgs
    likedAlbums?: boolean | UserCountOutputTypeCountLikedAlbumsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedArtistsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    songs: number
    playlistSongs: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | PlaylistCountOutputTypeCountSongsArgs
    playlistSongs?: boolean | PlaylistCountOutputTypeCountPlaylistSongsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongsWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    songs: number
    likedAlbums: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | AlbumCountOutputTypeCountSongsArgs
    likedAlbums?: boolean | AlbumCountOutputTypeCountLikedAlbumsArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    user: number
    likedSongs: number
    playlistSongs: number
    video: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SongCountOutputTypeCountUserArgs
    likedSongs?: boolean | SongCountOutputTypeCountLikedSongsArgs
    playlistSongs?: boolean | SongCountOutputTypeCountPlaylistSongsArgs
    video?: boolean | SongCountOutputTypeCountVideoArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountLikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongsWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongsWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    songs: number
    albums: number
    likedArtists: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | ArtistCountOutputTypeCountSongsArgs
    albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    likedArtists?: boolean | ArtistCountOutputTypeCountLikedArtistsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountLikedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedArtistsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    avatar_url: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    avatar_url: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    avatar_url: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    avatar_url?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    avatar_url?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    avatar_url?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    avatar_url: string | null
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar_url?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    songs?: boolean | User$songsArgs<ExtArgs>
    likedArtists?: boolean | User$likedArtistsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar_url?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    avatar_url?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    songs?: boolean | User$songsArgs<ExtArgs>
    likedArtists?: boolean | User$likedArtistsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      likedSongs: Prisma.$LikedSongsPayload<ExtArgs>[]
      songs: Prisma.$SongPayload<ExtArgs>[]
      likedArtists: Prisma.$LikedArtistsPayload<ExtArgs>[]
      likedAlbums: Prisma.$LikedAlbumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      avatar_url: string | null
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany"> | Null>
    likedSongs<T extends User$likedSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findMany"> | Null>
    songs<T extends User$songsArgs<ExtArgs> = {}>(args?: Subset<T, User$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany"> | Null>
    likedArtists<T extends User$likedArtistsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedArtistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findMany"> | Null>
    likedAlbums<T extends User$likedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.likedSongs
   */
  export type User$likedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    where?: LikedSongsWhereInput
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    cursor?: LikedSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongsScalarFieldEnum | LikedSongsScalarFieldEnum[]
  }

  /**
   * User.songs
   */
  export type User$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * User.likedArtists
   */
  export type User$likedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    where?: LikedArtistsWhereInput
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    cursor?: LikedArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedArtistsScalarFieldEnum | LikedArtistsScalarFieldEnum[]
  }

  /**
   * User.likedAlbums
   */
  export type User$likedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    cursor?: LikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    image_url: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    title: string
    image_url: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    playlistSongs?: boolean | Playlist$playlistSongsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    image_url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    playlistSongs?: boolean | Playlist$playlistSongsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      songs: Prisma.$SongPayload<ExtArgs>[]
      playlistSongs: Prisma.$PlaylistSongsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image_url: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    songs<T extends Playlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany"> | Null>
    playlistSongs<T extends Playlist$playlistSongsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'Int'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly image_url: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }

  /**
   * Playlist.songs
   */
  export type Playlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Playlist.playlistSongs
   */
  export type Playlist$playlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    where?: PlaylistSongsWhereInput
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    cursor?: PlaylistSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongsScalarFieldEnum | PlaylistSongsScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    image_url: number
    artistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    title: string
    image_url: string
    artistId: number | null
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | Album$artistArgs<ExtArgs>
    likedAlbums?: boolean | Album$likedAlbumsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | Album$artistArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    image_url?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | Album$artistArgs<ExtArgs>
    likedAlbums?: boolean | Album$likedAlbumsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Album$artistArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      artist: Prisma.$ArtistPayload<ExtArgs> | null
      likedAlbums: Prisma.$LikedAlbumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image_url: string
      artistId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Album$songsArgs<ExtArgs> = {}>(args?: Subset<T, Album$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany"> | Null>
    artist<T extends Album$artistArgs<ExtArgs> = {}>(args?: Subset<T, Album$artistArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    likedAlbums<T extends Album$likedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, Album$likedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Album model
   */ 
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly title: FieldRef<"Album", 'String'>
    readonly image_url: FieldRef<"Album", 'String'>
    readonly artistId: FieldRef<"Album", 'Int'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }

  /**
   * Album.songs
   */
  export type Album$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Album.artist
   */
  export type Album$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
  }

  /**
   * Album.likedAlbums
   */
  export type Album$likedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    cursor?: LikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    id: number | null
    playlistId: number | null
    albumId: number | null
    artistId: number | null
  }

  export type SongSumAggregateOutputType = {
    id: number | null
    playlistId: number | null
    albumId: number | null
    artistId: number | null
  }

  export type SongMinAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    song_url: string | null
    playlistId: number | null
    albumId: number | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image_url: string | null
    song_url: string | null
    playlistId: number | null
    albumId: number | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    image_url: number
    song_url: number
    playlistId: number
    albumId: number
    artistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    id?: true
    playlistId?: true
    albumId?: true
    artistId?: true
  }

  export type SongSumAggregateInputType = {
    id?: true
    playlistId?: true
    albumId?: true
    artistId?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    song_url?: true
    playlistId?: true
    albumId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    song_url?: true
    playlistId?: true
    albumId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    image_url?: true
    song_url?: true
    playlistId?: true
    albumId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: number
    title: string
    image_url: string
    song_url: string
    playlistId: number | null
    albumId: number | null
    artistId: number
    createdAt: Date
    updatedAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    song_url?: boolean
    playlistId?: boolean
    albumId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | Song$playlistArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    user?: boolean | Song$userArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    likedSongs?: boolean | Song$likedSongsArgs<ExtArgs>
    playlistSongs?: boolean | Song$playlistSongsArgs<ExtArgs>
    video?: boolean | Song$videoArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image_url?: boolean
    song_url?: boolean
    playlistId?: boolean
    albumId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | Song$playlistArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    image_url?: boolean
    song_url?: boolean
    playlistId?: boolean
    albumId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Song$playlistArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    user?: boolean | Song$userArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    likedSongs?: boolean | Song$likedSongsArgs<ExtArgs>
    playlistSongs?: boolean | Song$playlistSongsArgs<ExtArgs>
    video?: boolean | Song$videoArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Song$playlistArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>[]
      artist: Prisma.$ArtistPayload<ExtArgs>
      likedSongs: Prisma.$LikedSongsPayload<ExtArgs>[]
      playlistSongs: Prisma.$PlaylistSongsPayload<ExtArgs>[]
      video: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image_url: string
      song_url: string
      playlistId: number | null
      albumId: number | null
      artistId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends Song$playlistArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    album<T extends Song$albumArgs<ExtArgs> = {}>(args?: Subset<T, Song$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends Song$userArgs<ExtArgs> = {}>(args?: Subset<T, Song$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    likedSongs<T extends Song$likedSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$likedSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findMany"> | Null>
    playlistSongs<T extends Song$playlistSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findMany"> | Null>
    video<T extends Song$videoArgs<ExtArgs> = {}>(args?: Subset<T, Song$videoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'Int'>
    readonly title: FieldRef<"Song", 'String'>
    readonly image_url: FieldRef<"Song", 'String'>
    readonly song_url: FieldRef<"Song", 'String'>
    readonly playlistId: FieldRef<"Song", 'Int'>
    readonly albumId: FieldRef<"Song", 'Int'>
    readonly artistId: FieldRef<"Song", 'Int'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }

  /**
   * Song.playlist
   */
  export type Song$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
  }

  /**
   * Song.album
   */
  export type Song$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Song.user
   */
  export type Song$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Song.likedSongs
   */
  export type Song$likedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    where?: LikedSongsWhereInput
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    cursor?: LikedSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongsScalarFieldEnum | LikedSongsScalarFieldEnum[]
  }

  /**
   * Song.playlistSongs
   */
  export type Song$playlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    where?: PlaylistSongsWhereInput
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    cursor?: PlaylistSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongsScalarFieldEnum | PlaylistSongsScalarFieldEnum[]
  }

  /**
   * Song.video
   */
  export type Song$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model LikedSongs
   */

  export type AggregateLikedSongs = {
    _count: LikedSongsCountAggregateOutputType | null
    _avg: LikedSongsAvgAggregateOutputType | null
    _sum: LikedSongsSumAggregateOutputType | null
    _min: LikedSongsMinAggregateOutputType | null
    _max: LikedSongsMaxAggregateOutputType | null
  }

  export type LikedSongsAvgAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type LikedSongsSumAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type LikedSongsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    songId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedSongsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    songId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedSongsCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikedSongsAvgAggregateInputType = {
    id?: true
    songId?: true
  }

  export type LikedSongsSumAggregateInputType = {
    id?: true
    songId?: true
  }

  export type LikedSongsMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedSongsMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedSongsCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikedSongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSongs to aggregate.
     */
    where?: LikedSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedSongs
    **/
    _count?: true | LikedSongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedSongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedSongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedSongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedSongsMaxAggregateInputType
  }

  export type GetLikedSongsAggregateType<T extends LikedSongsAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedSongs[P]>
      : GetScalarType<T[P], AggregateLikedSongs[P]>
  }




  export type LikedSongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongsWhereInput
    orderBy?: LikedSongsOrderByWithAggregationInput | LikedSongsOrderByWithAggregationInput[]
    by: LikedSongsScalarFieldEnum[] | LikedSongsScalarFieldEnum
    having?: LikedSongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedSongsCountAggregateInputType | true
    _avg?: LikedSongsAvgAggregateInputType
    _sum?: LikedSongsSumAggregateInputType
    _min?: LikedSongsMinAggregateInputType
    _max?: LikedSongsMaxAggregateInputType
  }

  export type LikedSongsGroupByOutputType = {
    id: number
    userId: string
    songId: number
    createdAt: Date
    updatedAt: Date
    _count: LikedSongsCountAggregateOutputType | null
    _avg: LikedSongsAvgAggregateOutputType | null
    _sum: LikedSongsSumAggregateOutputType | null
    _min: LikedSongsMinAggregateOutputType | null
    _max: LikedSongsMaxAggregateOutputType | null
  }

  type GetLikedSongsGroupByPayload<T extends LikedSongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedSongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedSongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedSongsGroupByOutputType[P]>
            : GetScalarType<T[P], LikedSongsGroupByOutputType[P]>
        }
      >
    >


  export type LikedSongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSongs"]>

  export type LikedSongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSongs"]>

  export type LikedSongsSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikedSongsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type LikedSongsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $LikedSongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedSongs"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      songId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likedSongs"]>
    composites: {}
  }

  type LikedSongsGetPayload<S extends boolean | null | undefined | LikedSongsDefaultArgs> = $Result.GetResult<Prisma.$LikedSongsPayload, S>

  type LikedSongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedSongsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedSongsCountAggregateInputType | true
    }

  export interface LikedSongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedSongs'], meta: { name: 'LikedSongs' } }
    /**
     * Find zero or one LikedSongs that matches the filter.
     * @param {LikedSongsFindUniqueArgs} args - Arguments to find a LikedSongs
     * @example
     * // Get one LikedSongs
     * const likedSongs = await prisma.likedSongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedSongsFindUniqueArgs>(args: SelectSubset<T, LikedSongsFindUniqueArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LikedSongs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikedSongsFindUniqueOrThrowArgs} args - Arguments to find a LikedSongs
     * @example
     * // Get one LikedSongs
     * const likedSongs = await prisma.likedSongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedSongsFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedSongsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LikedSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsFindFirstArgs} args - Arguments to find a LikedSongs
     * @example
     * // Get one LikedSongs
     * const likedSongs = await prisma.likedSongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedSongsFindFirstArgs>(args?: SelectSubset<T, LikedSongsFindFirstArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LikedSongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsFindFirstOrThrowArgs} args - Arguments to find a LikedSongs
     * @example
     * // Get one LikedSongs
     * const likedSongs = await prisma.likedSongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedSongsFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedSongsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LikedSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedSongs
     * const likedSongs = await prisma.likedSongs.findMany()
     * 
     * // Get first 10 LikedSongs
     * const likedSongs = await prisma.likedSongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedSongsWithIdOnly = await prisma.likedSongs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedSongsFindManyArgs>(args?: SelectSubset<T, LikedSongsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LikedSongs.
     * @param {LikedSongsCreateArgs} args - Arguments to create a LikedSongs.
     * @example
     * // Create one LikedSongs
     * const LikedSongs = await prisma.likedSongs.create({
     *   data: {
     *     // ... data to create a LikedSongs
     *   }
     * })
     * 
     */
    create<T extends LikedSongsCreateArgs>(args: SelectSubset<T, LikedSongsCreateArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LikedSongs.
     * @param {LikedSongsCreateManyArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSongs = await prisma.likedSongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedSongsCreateManyArgs>(args?: SelectSubset<T, LikedSongsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedSongs and returns the data saved in the database.
     * @param {LikedSongsCreateManyAndReturnArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSongs = await prisma.likedSongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedSongs and only return the `id`
     * const likedSongsWithIdOnly = await prisma.likedSongs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedSongsCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedSongsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LikedSongs.
     * @param {LikedSongsDeleteArgs} args - Arguments to delete one LikedSongs.
     * @example
     * // Delete one LikedSongs
     * const LikedSongs = await prisma.likedSongs.delete({
     *   where: {
     *     // ... filter to delete one LikedSongs
     *   }
     * })
     * 
     */
    delete<T extends LikedSongsDeleteArgs>(args: SelectSubset<T, LikedSongsDeleteArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LikedSongs.
     * @param {LikedSongsUpdateArgs} args - Arguments to update one LikedSongs.
     * @example
     * // Update one LikedSongs
     * const likedSongs = await prisma.likedSongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedSongsUpdateArgs>(args: SelectSubset<T, LikedSongsUpdateArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LikedSongs.
     * @param {LikedSongsDeleteManyArgs} args - Arguments to filter LikedSongs to delete.
     * @example
     * // Delete a few LikedSongs
     * const { count } = await prisma.likedSongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedSongsDeleteManyArgs>(args?: SelectSubset<T, LikedSongsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedSongs
     * const likedSongs = await prisma.likedSongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedSongsUpdateManyArgs>(args: SelectSubset<T, LikedSongsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedSongs.
     * @param {LikedSongsUpsertArgs} args - Arguments to update or create a LikedSongs.
     * @example
     * // Update or create a LikedSongs
     * const likedSongs = await prisma.likedSongs.upsert({
     *   create: {
     *     // ... data to create a LikedSongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedSongs we want to update
     *   }
     * })
     */
    upsert<T extends LikedSongsUpsertArgs>(args: SelectSubset<T, LikedSongsUpsertArgs<ExtArgs>>): Prisma__LikedSongsClient<$Result.GetResult<Prisma.$LikedSongsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsCountArgs} args - Arguments to filter LikedSongs to count.
     * @example
     * // Count the number of LikedSongs
     * const count = await prisma.likedSongs.count({
     *   where: {
     *     // ... the filter for the LikedSongs we want to count
     *   }
     * })
    **/
    count<T extends LikedSongsCountArgs>(
      args?: Subset<T, LikedSongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedSongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedSongsAggregateArgs>(args: Subset<T, LikedSongsAggregateArgs>): Prisma.PrismaPromise<GetLikedSongsAggregateType<T>>

    /**
     * Group by LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedSongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedSongsGroupByArgs['orderBy'] }
        : { orderBy?: LikedSongsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedSongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedSongs model
   */
  readonly fields: LikedSongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedSongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedSongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedSongs model
   */ 
  interface LikedSongsFieldRefs {
    readonly id: FieldRef<"LikedSongs", 'Int'>
    readonly userId: FieldRef<"LikedSongs", 'String'>
    readonly songId: FieldRef<"LikedSongs", 'Int'>
    readonly createdAt: FieldRef<"LikedSongs", 'DateTime'>
    readonly updatedAt: FieldRef<"LikedSongs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedSongs findUnique
   */
  export type LikedSongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where: LikedSongsWhereUniqueInput
  }

  /**
   * LikedSongs findUniqueOrThrow
   */
  export type LikedSongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where: LikedSongsWhereUniqueInput
  }

  /**
   * LikedSongs findFirst
   */
  export type LikedSongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongsScalarFieldEnum | LikedSongsScalarFieldEnum[]
  }

  /**
   * LikedSongs findFirstOrThrow
   */
  export type LikedSongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongsScalarFieldEnum | LikedSongsScalarFieldEnum[]
  }

  /**
   * LikedSongs findMany
   */
  export type LikedSongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongsOrderByWithRelationInput | LikedSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedSongs.
     */
    cursor?: LikedSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    distinct?: LikedSongsScalarFieldEnum | LikedSongsScalarFieldEnum[]
  }

  /**
   * LikedSongs create
   */
  export type LikedSongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedSongs.
     */
    data: XOR<LikedSongsCreateInput, LikedSongsUncheckedCreateInput>
  }

  /**
   * LikedSongs createMany
   */
  export type LikedSongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongsCreateManyInput | LikedSongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedSongs createManyAndReturn
   */
  export type LikedSongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongsCreateManyInput | LikedSongsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedSongs update
   */
  export type LikedSongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedSongs.
     */
    data: XOR<LikedSongsUpdateInput, LikedSongsUncheckedUpdateInput>
    /**
     * Choose, which LikedSongs to update.
     */
    where: LikedSongsWhereUniqueInput
  }

  /**
   * LikedSongs updateMany
   */
  export type LikedSongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongsUpdateManyMutationInput, LikedSongsUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongsWhereInput
  }

  /**
   * LikedSongs upsert
   */
  export type LikedSongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedSongs to update in case it exists.
     */
    where: LikedSongsWhereUniqueInput
    /**
     * In case the LikedSongs found by the `where` argument doesn't exist, create a new LikedSongs with this data.
     */
    create: XOR<LikedSongsCreateInput, LikedSongsUncheckedCreateInput>
    /**
     * In case the LikedSongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedSongsUpdateInput, LikedSongsUncheckedUpdateInput>
  }

  /**
   * LikedSongs delete
   */
  export type LikedSongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
    /**
     * Filter which LikedSongs to delete.
     */
    where: LikedSongsWhereUniqueInput
  }

  /**
   * LikedSongs deleteMany
   */
  export type LikedSongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSongs to delete
     */
    where?: LikedSongsWhereInput
  }

  /**
   * LikedSongs without action
   */
  export type LikedSongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSongs
     */
    select?: LikedSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongsInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    avatar_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    avatar_url: string
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    likedArtists?: boolean | Artist$likedArtistsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    likedArtists?: boolean | Artist$likedArtistsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      likedArtists: Prisma.$LikedArtistsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      avatar_url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Artist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany"> | Null>
    albums<T extends Artist$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany"> | Null>
    likedArtists<T extends Artist$likedArtistsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$likedArtistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly avatar_url: FieldRef<"Artist", 'String'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }

  /**
   * Artist.songs
   */
  export type Artist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Artist.albums
   */
  export type Artist$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist.likedArtists
   */
  export type Artist$likedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    where?: LikedArtistsWhereInput
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    cursor?: LikedArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedArtistsScalarFieldEnum | LikedArtistsScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model LikedArtists
   */

  export type AggregateLikedArtists = {
    _count: LikedArtistsCountAggregateOutputType | null
    _avg: LikedArtistsAvgAggregateOutputType | null
    _sum: LikedArtistsSumAggregateOutputType | null
    _min: LikedArtistsMinAggregateOutputType | null
    _max: LikedArtistsMaxAggregateOutputType | null
  }

  export type LikedArtistsAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type LikedArtistsSumAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type LikedArtistsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedArtistsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    artistId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedArtistsCountAggregateOutputType = {
    id: number
    userId: number
    artistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikedArtistsAvgAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type LikedArtistsSumAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type LikedArtistsMinAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedArtistsMaxAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedArtistsCountAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikedArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedArtists to aggregate.
     */
    where?: LikedArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedArtists to fetch.
     */
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedArtists
    **/
    _count?: true | LikedArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedArtistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedArtistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedArtistsMaxAggregateInputType
  }

  export type GetLikedArtistsAggregateType<T extends LikedArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedArtists[P]>
      : GetScalarType<T[P], AggregateLikedArtists[P]>
  }




  export type LikedArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedArtistsWhereInput
    orderBy?: LikedArtistsOrderByWithAggregationInput | LikedArtistsOrderByWithAggregationInput[]
    by: LikedArtistsScalarFieldEnum[] | LikedArtistsScalarFieldEnum
    having?: LikedArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedArtistsCountAggregateInputType | true
    _avg?: LikedArtistsAvgAggregateInputType
    _sum?: LikedArtistsSumAggregateInputType
    _min?: LikedArtistsMinAggregateInputType
    _max?: LikedArtistsMaxAggregateInputType
  }

  export type LikedArtistsGroupByOutputType = {
    id: number
    userId: string
    artistId: number
    createdAt: Date
    updatedAt: Date
    _count: LikedArtistsCountAggregateOutputType | null
    _avg: LikedArtistsAvgAggregateOutputType | null
    _sum: LikedArtistsSumAggregateOutputType | null
    _min: LikedArtistsMinAggregateOutputType | null
    _max: LikedArtistsMaxAggregateOutputType | null
  }

  type GetLikedArtistsGroupByPayload<T extends LikedArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], LikedArtistsGroupByOutputType[P]>
        }
      >
    >


  export type LikedArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedArtists"]>

  export type LikedArtistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedArtists"]>

  export type LikedArtistsSelectScalar = {
    id?: boolean
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikedArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type LikedArtistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $LikedArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedArtists"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      artistId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likedArtists"]>
    composites: {}
  }

  type LikedArtistsGetPayload<S extends boolean | null | undefined | LikedArtistsDefaultArgs> = $Result.GetResult<Prisma.$LikedArtistsPayload, S>

  type LikedArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedArtistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedArtistsCountAggregateInputType | true
    }

  export interface LikedArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedArtists'], meta: { name: 'LikedArtists' } }
    /**
     * Find zero or one LikedArtists that matches the filter.
     * @param {LikedArtistsFindUniqueArgs} args - Arguments to find a LikedArtists
     * @example
     * // Get one LikedArtists
     * const likedArtists = await prisma.likedArtists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedArtistsFindUniqueArgs>(args: SelectSubset<T, LikedArtistsFindUniqueArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LikedArtists that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikedArtistsFindUniqueOrThrowArgs} args - Arguments to find a LikedArtists
     * @example
     * // Get one LikedArtists
     * const likedArtists = await prisma.likedArtists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedArtistsFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedArtistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LikedArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsFindFirstArgs} args - Arguments to find a LikedArtists
     * @example
     * // Get one LikedArtists
     * const likedArtists = await prisma.likedArtists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedArtistsFindFirstArgs>(args?: SelectSubset<T, LikedArtistsFindFirstArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LikedArtists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsFindFirstOrThrowArgs} args - Arguments to find a LikedArtists
     * @example
     * // Get one LikedArtists
     * const likedArtists = await prisma.likedArtists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedArtistsFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedArtistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LikedArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedArtists
     * const likedArtists = await prisma.likedArtists.findMany()
     * 
     * // Get first 10 LikedArtists
     * const likedArtists = await prisma.likedArtists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedArtistsWithIdOnly = await prisma.likedArtists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedArtistsFindManyArgs>(args?: SelectSubset<T, LikedArtistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LikedArtists.
     * @param {LikedArtistsCreateArgs} args - Arguments to create a LikedArtists.
     * @example
     * // Create one LikedArtists
     * const LikedArtists = await prisma.likedArtists.create({
     *   data: {
     *     // ... data to create a LikedArtists
     *   }
     * })
     * 
     */
    create<T extends LikedArtistsCreateArgs>(args: SelectSubset<T, LikedArtistsCreateArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LikedArtists.
     * @param {LikedArtistsCreateManyArgs} args - Arguments to create many LikedArtists.
     * @example
     * // Create many LikedArtists
     * const likedArtists = await prisma.likedArtists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedArtistsCreateManyArgs>(args?: SelectSubset<T, LikedArtistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedArtists and returns the data saved in the database.
     * @param {LikedArtistsCreateManyAndReturnArgs} args - Arguments to create many LikedArtists.
     * @example
     * // Create many LikedArtists
     * const likedArtists = await prisma.likedArtists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedArtists and only return the `id`
     * const likedArtistsWithIdOnly = await prisma.likedArtists.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedArtistsCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedArtistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LikedArtists.
     * @param {LikedArtistsDeleteArgs} args - Arguments to delete one LikedArtists.
     * @example
     * // Delete one LikedArtists
     * const LikedArtists = await prisma.likedArtists.delete({
     *   where: {
     *     // ... filter to delete one LikedArtists
     *   }
     * })
     * 
     */
    delete<T extends LikedArtistsDeleteArgs>(args: SelectSubset<T, LikedArtistsDeleteArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LikedArtists.
     * @param {LikedArtistsUpdateArgs} args - Arguments to update one LikedArtists.
     * @example
     * // Update one LikedArtists
     * const likedArtists = await prisma.likedArtists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedArtistsUpdateArgs>(args: SelectSubset<T, LikedArtistsUpdateArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LikedArtists.
     * @param {LikedArtistsDeleteManyArgs} args - Arguments to filter LikedArtists to delete.
     * @example
     * // Delete a few LikedArtists
     * const { count } = await prisma.likedArtists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedArtistsDeleteManyArgs>(args?: SelectSubset<T, LikedArtistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedArtists
     * const likedArtists = await prisma.likedArtists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedArtistsUpdateManyArgs>(args: SelectSubset<T, LikedArtistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedArtists.
     * @param {LikedArtistsUpsertArgs} args - Arguments to update or create a LikedArtists.
     * @example
     * // Update or create a LikedArtists
     * const likedArtists = await prisma.likedArtists.upsert({
     *   create: {
     *     // ... data to create a LikedArtists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedArtists we want to update
     *   }
     * })
     */
    upsert<T extends LikedArtistsUpsertArgs>(args: SelectSubset<T, LikedArtistsUpsertArgs<ExtArgs>>): Prisma__LikedArtistsClient<$Result.GetResult<Prisma.$LikedArtistsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LikedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsCountArgs} args - Arguments to filter LikedArtists to count.
     * @example
     * // Count the number of LikedArtists
     * const count = await prisma.likedArtists.count({
     *   where: {
     *     // ... the filter for the LikedArtists we want to count
     *   }
     * })
    **/
    count<T extends LikedArtistsCountArgs>(
      args?: Subset<T, LikedArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedArtistsAggregateArgs>(args: Subset<T, LikedArtistsAggregateArgs>): Prisma.PrismaPromise<GetLikedArtistsAggregateType<T>>

    /**
     * Group by LikedArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedArtistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedArtistsGroupByArgs['orderBy'] }
        : { orderBy?: LikedArtistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedArtists model
   */
  readonly fields: LikedArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedArtists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedArtists model
   */ 
  interface LikedArtistsFieldRefs {
    readonly id: FieldRef<"LikedArtists", 'Int'>
    readonly userId: FieldRef<"LikedArtists", 'String'>
    readonly artistId: FieldRef<"LikedArtists", 'Int'>
    readonly createdAt: FieldRef<"LikedArtists", 'DateTime'>
    readonly updatedAt: FieldRef<"LikedArtists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedArtists findUnique
   */
  export type LikedArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter, which LikedArtists to fetch.
     */
    where: LikedArtistsWhereUniqueInput
  }

  /**
   * LikedArtists findUniqueOrThrow
   */
  export type LikedArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter, which LikedArtists to fetch.
     */
    where: LikedArtistsWhereUniqueInput
  }

  /**
   * LikedArtists findFirst
   */
  export type LikedArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter, which LikedArtists to fetch.
     */
    where?: LikedArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedArtists to fetch.
     */
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedArtists.
     */
    cursor?: LikedArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedArtists.
     */
    distinct?: LikedArtistsScalarFieldEnum | LikedArtistsScalarFieldEnum[]
  }

  /**
   * LikedArtists findFirstOrThrow
   */
  export type LikedArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter, which LikedArtists to fetch.
     */
    where?: LikedArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedArtists to fetch.
     */
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedArtists.
     */
    cursor?: LikedArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedArtists.
     */
    distinct?: LikedArtistsScalarFieldEnum | LikedArtistsScalarFieldEnum[]
  }

  /**
   * LikedArtists findMany
   */
  export type LikedArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter, which LikedArtists to fetch.
     */
    where?: LikedArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedArtists to fetch.
     */
    orderBy?: LikedArtistsOrderByWithRelationInput | LikedArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedArtists.
     */
    cursor?: LikedArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedArtists.
     */
    skip?: number
    distinct?: LikedArtistsScalarFieldEnum | LikedArtistsScalarFieldEnum[]
  }

  /**
   * LikedArtists create
   */
  export type LikedArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedArtists.
     */
    data: XOR<LikedArtistsCreateInput, LikedArtistsUncheckedCreateInput>
  }

  /**
   * LikedArtists createMany
   */
  export type LikedArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedArtists.
     */
    data: LikedArtistsCreateManyInput | LikedArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedArtists createManyAndReturn
   */
  export type LikedArtistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LikedArtists.
     */
    data: LikedArtistsCreateManyInput | LikedArtistsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedArtists update
   */
  export type LikedArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedArtists.
     */
    data: XOR<LikedArtistsUpdateInput, LikedArtistsUncheckedUpdateInput>
    /**
     * Choose, which LikedArtists to update.
     */
    where: LikedArtistsWhereUniqueInput
  }

  /**
   * LikedArtists updateMany
   */
  export type LikedArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedArtists.
     */
    data: XOR<LikedArtistsUpdateManyMutationInput, LikedArtistsUncheckedUpdateManyInput>
    /**
     * Filter which LikedArtists to update
     */
    where?: LikedArtistsWhereInput
  }

  /**
   * LikedArtists upsert
   */
  export type LikedArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedArtists to update in case it exists.
     */
    where: LikedArtistsWhereUniqueInput
    /**
     * In case the LikedArtists found by the `where` argument doesn't exist, create a new LikedArtists with this data.
     */
    create: XOR<LikedArtistsCreateInput, LikedArtistsUncheckedCreateInput>
    /**
     * In case the LikedArtists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedArtistsUpdateInput, LikedArtistsUncheckedUpdateInput>
  }

  /**
   * LikedArtists delete
   */
  export type LikedArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
    /**
     * Filter which LikedArtists to delete.
     */
    where: LikedArtistsWhereUniqueInput
  }

  /**
   * LikedArtists deleteMany
   */
  export type LikedArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedArtists to delete
     */
    where?: LikedArtistsWhereInput
  }

  /**
   * LikedArtists without action
   */
  export type LikedArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedArtists
     */
    select?: LikedArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedArtistsInclude<ExtArgs> | null
  }


  /**
   * Model LikedAlbums
   */

  export type AggregateLikedAlbums = {
    _count: LikedAlbumsCountAggregateOutputType | null
    _avg: LikedAlbumsAvgAggregateOutputType | null
    _sum: LikedAlbumsSumAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  export type LikedAlbumsAvgAggregateOutputType = {
    id: number | null
    albumId: number | null
  }

  export type LikedAlbumsSumAggregateOutputType = {
    id: number | null
    albumId: number | null
  }

  export type LikedAlbumsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    albumId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedAlbumsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    albumId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedAlbumsCountAggregateOutputType = {
    id: number
    userId: number
    albumId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikedAlbumsAvgAggregateInputType = {
    id?: true
    albumId?: true
  }

  export type LikedAlbumsSumAggregateInputType = {
    id?: true
    albumId?: true
  }

  export type LikedAlbumsMinAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedAlbumsMaxAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedAlbumsCountAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikedAlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to aggregate.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedAlbums
    **/
    _count?: true | LikedAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedAlbumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedAlbumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type GetLikedAlbumsAggregateType<T extends LikedAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedAlbums[P]>
      : GetScalarType<T[P], AggregateLikedAlbums[P]>
  }




  export type LikedAlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithAggregationInput | LikedAlbumsOrderByWithAggregationInput[]
    by: LikedAlbumsScalarFieldEnum[] | LikedAlbumsScalarFieldEnum
    having?: LikedAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedAlbumsCountAggregateInputType | true
    _avg?: LikedAlbumsAvgAggregateInputType
    _sum?: LikedAlbumsSumAggregateInputType
    _min?: LikedAlbumsMinAggregateInputType
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type LikedAlbumsGroupByOutputType = {
    id: number
    userId: string
    albumId: number
    createdAt: Date
    updatedAt: Date
    _count: LikedAlbumsCountAggregateOutputType | null
    _avg: LikedAlbumsAvgAggregateOutputType | null
    _sum: LikedAlbumsSumAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  type GetLikedAlbumsGroupByPayload<T extends LikedAlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type LikedAlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbums"]>

  export type LikedAlbumsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbums"]>

  export type LikedAlbumsSelectScalar = {
    id?: boolean
    userId?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikedAlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }
  export type LikedAlbumsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }

  export type $LikedAlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedAlbums"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      album: Prisma.$AlbumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      albumId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likedAlbums"]>
    composites: {}
  }

  type LikedAlbumsGetPayload<S extends boolean | null | undefined | LikedAlbumsDefaultArgs> = $Result.GetResult<Prisma.$LikedAlbumsPayload, S>

  type LikedAlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedAlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedAlbumsCountAggregateInputType | true
    }

  export interface LikedAlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedAlbums'], meta: { name: 'LikedAlbums' } }
    /**
     * Find zero or one LikedAlbums that matches the filter.
     * @param {LikedAlbumsFindUniqueArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedAlbumsFindUniqueArgs>(args: SelectSubset<T, LikedAlbumsFindUniqueArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LikedAlbums that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikedAlbumsFindUniqueOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedAlbumsFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedAlbumsFindFirstArgs>(args?: SelectSubset<T, LikedAlbumsFindFirstArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedAlbumsFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedAlbumsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany()
     * 
     * // Get first 10 LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedAlbumsWithIdOnly = await prisma.likedAlbums.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedAlbumsFindManyArgs>(args?: SelectSubset<T, LikedAlbumsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LikedAlbums.
     * @param {LikedAlbumsCreateArgs} args - Arguments to create a LikedAlbums.
     * @example
     * // Create one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.create({
     *   data: {
     *     // ... data to create a LikedAlbums
     *   }
     * })
     * 
     */
    create<T extends LikedAlbumsCreateArgs>(args: SelectSubset<T, LikedAlbumsCreateArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LikedAlbums.
     * @param {LikedAlbumsCreateManyArgs} args - Arguments to create many LikedAlbums.
     * @example
     * // Create many LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedAlbumsCreateManyArgs>(args?: SelectSubset<T, LikedAlbumsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedAlbums and returns the data saved in the database.
     * @param {LikedAlbumsCreateManyAndReturnArgs} args - Arguments to create many LikedAlbums.
     * @example
     * // Create many LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedAlbums and only return the `id`
     * const likedAlbumsWithIdOnly = await prisma.likedAlbums.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedAlbumsCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedAlbumsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LikedAlbums.
     * @param {LikedAlbumsDeleteArgs} args - Arguments to delete one LikedAlbums.
     * @example
     * // Delete one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.delete({
     *   where: {
     *     // ... filter to delete one LikedAlbums
     *   }
     * })
     * 
     */
    delete<T extends LikedAlbumsDeleteArgs>(args: SelectSubset<T, LikedAlbumsDeleteArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LikedAlbums.
     * @param {LikedAlbumsUpdateArgs} args - Arguments to update one LikedAlbums.
     * @example
     * // Update one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedAlbumsUpdateArgs>(args: SelectSubset<T, LikedAlbumsUpdateArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LikedAlbums.
     * @param {LikedAlbumsDeleteManyArgs} args - Arguments to filter LikedAlbums to delete.
     * @example
     * // Delete a few LikedAlbums
     * const { count } = await prisma.likedAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedAlbumsDeleteManyArgs>(args?: SelectSubset<T, LikedAlbumsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedAlbumsUpdateManyArgs>(args: SelectSubset<T, LikedAlbumsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedAlbums.
     * @param {LikedAlbumsUpsertArgs} args - Arguments to update or create a LikedAlbums.
     * @example
     * // Update or create a LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.upsert({
     *   create: {
     *     // ... data to create a LikedAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedAlbums we want to update
     *   }
     * })
     */
    upsert<T extends LikedAlbumsUpsertArgs>(args: SelectSubset<T, LikedAlbumsUpsertArgs<ExtArgs>>): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsCountArgs} args - Arguments to filter LikedAlbums to count.
     * @example
     * // Count the number of LikedAlbums
     * const count = await prisma.likedAlbums.count({
     *   where: {
     *     // ... the filter for the LikedAlbums we want to count
     *   }
     * })
    **/
    count<T extends LikedAlbumsCountArgs>(
      args?: Subset<T, LikedAlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedAlbumsAggregateArgs>(args: Subset<T, LikedAlbumsAggregateArgs>): Prisma.PrismaPromise<GetLikedAlbumsAggregateType<T>>

    /**
     * Group by LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: LikedAlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedAlbums model
   */
  readonly fields: LikedAlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedAlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedAlbums model
   */ 
  interface LikedAlbumsFieldRefs {
    readonly id: FieldRef<"LikedAlbums", 'Int'>
    readonly userId: FieldRef<"LikedAlbums", 'String'>
    readonly albumId: FieldRef<"LikedAlbums", 'Int'>
    readonly createdAt: FieldRef<"LikedAlbums", 'DateTime'>
    readonly updatedAt: FieldRef<"LikedAlbums", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedAlbums findUnique
   */
  export type LikedAlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }

  /**
   * LikedAlbums findUniqueOrThrow
   */
  export type LikedAlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }

  /**
   * LikedAlbums findFirst
   */
  export type LikedAlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }

  /**
   * LikedAlbums findFirstOrThrow
   */
  export type LikedAlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }

  /**
   * LikedAlbums findMany
   */
  export type LikedAlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }

  /**
   * LikedAlbums create
   */
  export type LikedAlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedAlbums.
     */
    data: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
  }

  /**
   * LikedAlbums createMany
   */
  export type LikedAlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumsCreateManyInput | LikedAlbumsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedAlbums createManyAndReturn
   */
  export type LikedAlbumsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumsCreateManyInput | LikedAlbumsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedAlbums update
   */
  export type LikedAlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
    /**
     * Choose, which LikedAlbums to update.
     */
    where: LikedAlbumsWhereUniqueInput
  }

  /**
   * LikedAlbums updateMany
   */
  export type LikedAlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which LikedAlbums to update
     */
    where?: LikedAlbumsWhereInput
  }

  /**
   * LikedAlbums upsert
   */
  export type LikedAlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedAlbums to update in case it exists.
     */
    where: LikedAlbumsWhereUniqueInput
    /**
     * In case the LikedAlbums found by the `where` argument doesn't exist, create a new LikedAlbums with this data.
     */
    create: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
    /**
     * In case the LikedAlbums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
  }

  /**
   * LikedAlbums delete
   */
  export type LikedAlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter which LikedAlbums to delete.
     */
    where: LikedAlbumsWhereUniqueInput
  }

  /**
   * LikedAlbums deleteMany
   */
  export type LikedAlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to delete
     */
    where?: LikedAlbumsWhereInput
  }

  /**
   * LikedAlbums without action
   */
  export type LikedAlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistSongs
   */

  export type AggregatePlaylistSongs = {
    _count: PlaylistSongsCountAggregateOutputType | null
    _avg: PlaylistSongsAvgAggregateOutputType | null
    _sum: PlaylistSongsSumAggregateOutputType | null
    _min: PlaylistSongsMinAggregateOutputType | null
    _max: PlaylistSongsMaxAggregateOutputType | null
  }

  export type PlaylistSongsAvgAggregateOutputType = {
    id: number | null
    playlistId: number | null
    songId: number | null
  }

  export type PlaylistSongsSumAggregateOutputType = {
    id: number | null
    playlistId: number | null
    songId: number | null
  }

  export type PlaylistSongsMinAggregateOutputType = {
    id: number | null
    playlistId: number | null
    songId: number | null
    createdAt: Date | null
  }

  export type PlaylistSongsMaxAggregateOutputType = {
    id: number | null
    playlistId: number | null
    songId: number | null
    createdAt: Date | null
  }

  export type PlaylistSongsCountAggregateOutputType = {
    id: number
    playlistId: number
    songId: number
    createdAt: number
    _all: number
  }


  export type PlaylistSongsAvgAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
  }

  export type PlaylistSongsSumAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
  }

  export type PlaylistSongsMinAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    createdAt?: true
  }

  export type PlaylistSongsMaxAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    createdAt?: true
  }

  export type PlaylistSongsCountAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    createdAt?: true
    _all?: true
  }

  export type PlaylistSongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSongs to aggregate.
     */
    where?: PlaylistSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistSongs
    **/
    _count?: true | PlaylistSongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistSongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistSongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistSongsMaxAggregateInputType
  }

  export type GetPlaylistSongsAggregateType<T extends PlaylistSongsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistSongs[P]>
      : GetScalarType<T[P], AggregatePlaylistSongs[P]>
  }




  export type PlaylistSongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongsWhereInput
    orderBy?: PlaylistSongsOrderByWithAggregationInput | PlaylistSongsOrderByWithAggregationInput[]
    by: PlaylistSongsScalarFieldEnum[] | PlaylistSongsScalarFieldEnum
    having?: PlaylistSongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistSongsCountAggregateInputType | true
    _avg?: PlaylistSongsAvgAggregateInputType
    _sum?: PlaylistSongsSumAggregateInputType
    _min?: PlaylistSongsMinAggregateInputType
    _max?: PlaylistSongsMaxAggregateInputType
  }

  export type PlaylistSongsGroupByOutputType = {
    id: number
    playlistId: number
    songId: number
    createdAt: Date
    _count: PlaylistSongsCountAggregateOutputType | null
    _avg: PlaylistSongsAvgAggregateOutputType | null
    _sum: PlaylistSongsSumAggregateOutputType | null
    _min: PlaylistSongsMinAggregateOutputType | null
    _max: PlaylistSongsMaxAggregateOutputType | null
  }

  type GetPlaylistSongsGroupByPayload<T extends PlaylistSongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistSongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistSongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistSongsGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistSongsGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    createdAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSongs"]>

  export type PlaylistSongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    createdAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSongs"]>

  export type PlaylistSongsSelectScalar = {
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    createdAt?: boolean
  }

  export type PlaylistSongsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type PlaylistSongsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $PlaylistSongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistSongs"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playlistId: number
      songId: number
      createdAt: Date
    }, ExtArgs["result"]["playlistSongs"]>
    composites: {}
  }

  type PlaylistSongsGetPayload<S extends boolean | null | undefined | PlaylistSongsDefaultArgs> = $Result.GetResult<Prisma.$PlaylistSongsPayload, S>

  type PlaylistSongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistSongsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistSongsCountAggregateInputType | true
    }

  export interface PlaylistSongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistSongs'], meta: { name: 'PlaylistSongs' } }
    /**
     * Find zero or one PlaylistSongs that matches the filter.
     * @param {PlaylistSongsFindUniqueArgs} args - Arguments to find a PlaylistSongs
     * @example
     * // Get one PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistSongsFindUniqueArgs>(args: SelectSubset<T, PlaylistSongsFindUniqueArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlaylistSongs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaylistSongsFindUniqueOrThrowArgs} args - Arguments to find a PlaylistSongs
     * @example
     * // Get one PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistSongsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistSongsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlaylistSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsFindFirstArgs} args - Arguments to find a PlaylistSongs
     * @example
     * // Get one PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistSongsFindFirstArgs>(args?: SelectSubset<T, PlaylistSongsFindFirstArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlaylistSongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsFindFirstOrThrowArgs} args - Arguments to find a PlaylistSongs
     * @example
     * // Get one PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistSongsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistSongsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlaylistSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findMany()
     * 
     * // Get first 10 PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistSongsWithIdOnly = await prisma.playlistSongs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistSongsFindManyArgs>(args?: SelectSubset<T, PlaylistSongsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlaylistSongs.
     * @param {PlaylistSongsCreateArgs} args - Arguments to create a PlaylistSongs.
     * @example
     * // Create one PlaylistSongs
     * const PlaylistSongs = await prisma.playlistSongs.create({
     *   data: {
     *     // ... data to create a PlaylistSongs
     *   }
     * })
     * 
     */
    create<T extends PlaylistSongsCreateArgs>(args: SelectSubset<T, PlaylistSongsCreateArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlaylistSongs.
     * @param {PlaylistSongsCreateManyArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistSongsCreateManyArgs>(args?: SelectSubset<T, PlaylistSongsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistSongs and returns the data saved in the database.
     * @param {PlaylistSongsCreateManyAndReturnArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistSongs and only return the `id`
     * const playlistSongsWithIdOnly = await prisma.playlistSongs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistSongsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistSongsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlaylistSongs.
     * @param {PlaylistSongsDeleteArgs} args - Arguments to delete one PlaylistSongs.
     * @example
     * // Delete one PlaylistSongs
     * const PlaylistSongs = await prisma.playlistSongs.delete({
     *   where: {
     *     // ... filter to delete one PlaylistSongs
     *   }
     * })
     * 
     */
    delete<T extends PlaylistSongsDeleteArgs>(args: SelectSubset<T, PlaylistSongsDeleteArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlaylistSongs.
     * @param {PlaylistSongsUpdateArgs} args - Arguments to update one PlaylistSongs.
     * @example
     * // Update one PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistSongsUpdateArgs>(args: SelectSubset<T, PlaylistSongsUpdateArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlaylistSongs.
     * @param {PlaylistSongsDeleteManyArgs} args - Arguments to filter PlaylistSongs to delete.
     * @example
     * // Delete a few PlaylistSongs
     * const { count } = await prisma.playlistSongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistSongsDeleteManyArgs>(args?: SelectSubset<T, PlaylistSongsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistSongsUpdateManyArgs>(args: SelectSubset<T, PlaylistSongsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistSongs.
     * @param {PlaylistSongsUpsertArgs} args - Arguments to update or create a PlaylistSongs.
     * @example
     * // Update or create a PlaylistSongs
     * const playlistSongs = await prisma.playlistSongs.upsert({
     *   create: {
     *     // ... data to create a PlaylistSongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistSongs we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistSongsUpsertArgs>(args: SelectSubset<T, PlaylistSongsUpsertArgs<ExtArgs>>): Prisma__PlaylistSongsClient<$Result.GetResult<Prisma.$PlaylistSongsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsCountArgs} args - Arguments to filter PlaylistSongs to count.
     * @example
     * // Count the number of PlaylistSongs
     * const count = await prisma.playlistSongs.count({
     *   where: {
     *     // ... the filter for the PlaylistSongs we want to count
     *   }
     * })
    **/
    count<T extends PlaylistSongsCountArgs>(
      args?: Subset<T, PlaylistSongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistSongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistSongsAggregateArgs>(args: Subset<T, PlaylistSongsAggregateArgs>): Prisma.PrismaPromise<GetPlaylistSongsAggregateType<T>>

    /**
     * Group by PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistSongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistSongsGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistSongsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistSongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistSongs model
   */
  readonly fields: PlaylistSongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistSongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistSongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistSongs model
   */ 
  interface PlaylistSongsFieldRefs {
    readonly id: FieldRef<"PlaylistSongs", 'Int'>
    readonly playlistId: FieldRef<"PlaylistSongs", 'Int'>
    readonly songId: FieldRef<"PlaylistSongs", 'Int'>
    readonly createdAt: FieldRef<"PlaylistSongs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistSongs findUnique
   */
  export type PlaylistSongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where: PlaylistSongsWhereUniqueInput
  }

  /**
   * PlaylistSongs findUniqueOrThrow
   */
  export type PlaylistSongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where: PlaylistSongsWhereUniqueInput
  }

  /**
   * PlaylistSongs findFirst
   */
  export type PlaylistSongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where?: PlaylistSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongsScalarFieldEnum | PlaylistSongsScalarFieldEnum[]
  }

  /**
   * PlaylistSongs findFirstOrThrow
   */
  export type PlaylistSongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where?: PlaylistSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongsScalarFieldEnum | PlaylistSongsScalarFieldEnum[]
  }

  /**
   * PlaylistSongs findMany
   */
  export type PlaylistSongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where?: PlaylistSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongsOrderByWithRelationInput | PlaylistSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistSongs.
     */
    cursor?: PlaylistSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    distinct?: PlaylistSongsScalarFieldEnum | PlaylistSongsScalarFieldEnum[]
  }

  /**
   * PlaylistSongs create
   */
  export type PlaylistSongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistSongs.
     */
    data: XOR<PlaylistSongsCreateInput, PlaylistSongsUncheckedCreateInput>
  }

  /**
   * PlaylistSongs createMany
   */
  export type PlaylistSongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongsCreateManyInput | PlaylistSongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistSongs createManyAndReturn
   */
  export type PlaylistSongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongsCreateManyInput | PlaylistSongsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistSongs update
   */
  export type PlaylistSongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistSongs.
     */
    data: XOR<PlaylistSongsUpdateInput, PlaylistSongsUncheckedUpdateInput>
    /**
     * Choose, which PlaylistSongs to update.
     */
    where: PlaylistSongsWhereUniqueInput
  }

  /**
   * PlaylistSongs updateMany
   */
  export type PlaylistSongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistSongs.
     */
    data: XOR<PlaylistSongsUpdateManyMutationInput, PlaylistSongsUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistSongs to update
     */
    where?: PlaylistSongsWhereInput
  }

  /**
   * PlaylistSongs upsert
   */
  export type PlaylistSongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistSongs to update in case it exists.
     */
    where: PlaylistSongsWhereUniqueInput
    /**
     * In case the PlaylistSongs found by the `where` argument doesn't exist, create a new PlaylistSongs with this data.
     */
    create: XOR<PlaylistSongsCreateInput, PlaylistSongsUncheckedCreateInput>
    /**
     * In case the PlaylistSongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistSongsUpdateInput, PlaylistSongsUncheckedUpdateInput>
  }

  /**
   * PlaylistSongs delete
   */
  export type PlaylistSongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
    /**
     * Filter which PlaylistSongs to delete.
     */
    where: PlaylistSongsWhereUniqueInput
  }

  /**
   * PlaylistSongs deleteMany
   */
  export type PlaylistSongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSongs to delete
     */
    where?: PlaylistSongsWhereInput
  }

  /**
   * PlaylistSongs without action
   */
  export type PlaylistSongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSongs
     */
    select?: PlaylistSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongsInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    video_url: string | null
    songId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    video_url: string | null
    songId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    video_url: number
    songId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    songId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    songId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    video_url?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    video_url?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    video_url?: true
    songId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    video_url: string
    songId: number
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_url?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_url?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    video_url?: boolean
    songId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      video_url: string
      songId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */ 
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly video_url: FieldRef<"Video", 'String'>
    readonly songId: FieldRef<"Video", 'Int'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    avatar_url: 'avatar_url',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image_url: 'image_url',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image_url: 'image_url',
    artistId: 'artistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image_url: 'image_url',
    song_url: 'song_url',
    playlistId: 'playlistId',
    albumId: 'albumId',
    artistId: 'artistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const LikedSongsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikedSongsScalarFieldEnum = (typeof LikedSongsScalarFieldEnum)[keyof typeof LikedSongsScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar_url: 'avatar_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const LikedArtistsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    artistId: 'artistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikedArtistsScalarFieldEnum = (typeof LikedArtistsScalarFieldEnum)[keyof typeof LikedArtistsScalarFieldEnum]


  export const LikedAlbumsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    albumId: 'albumId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikedAlbumsScalarFieldEnum = (typeof LikedAlbumsScalarFieldEnum)[keyof typeof LikedAlbumsScalarFieldEnum]


  export const PlaylistSongsScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    songId: 'songId',
    createdAt: 'createdAt'
  };

  export type PlaylistSongsScalarFieldEnum = (typeof PlaylistSongsScalarFieldEnum)[keyof typeof PlaylistSongsScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    video_url: 'video_url',
    songId: 'songId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    likedSongs?: LikedSongsListRelationFilter
    songs?: SongListRelationFilter
    likedArtists?: LikedArtistsListRelationFilter
    likedAlbums?: LikedAlbumsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlists?: PlaylistOrderByRelationAggregateInput
    likedSongs?: LikedSongsOrderByRelationAggregateInput
    songs?: SongOrderByRelationAggregateInput
    likedArtists?: LikedArtistsOrderByRelationAggregateInput
    likedAlbums?: LikedAlbumsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    avatar_url?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    likedSongs?: LikedSongsListRelationFilter
    songs?: SongListRelationFilter
    likedArtists?: LikedArtistsListRelationFilter
    likedAlbums?: LikedAlbumsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: IntFilter<"Playlist"> | number
    title?: StringFilter<"Playlist"> | string
    image_url?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    songs?: SongListRelationFilter
    playlistSongs?: PlaylistSongsListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    songs?: SongOrderByRelationAggregateInput
    playlistSongs?: PlaylistSongsOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    image_url?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    songs?: SongListRelationFilter
    playlistSongs?: PlaylistSongsListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Playlist"> | number
    title?: StringWithAggregatesFilter<"Playlist"> | string
    image_url?: StringWithAggregatesFilter<"Playlist"> | string
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    image_url?: StringFilter<"Album"> | string
    artistId?: IntNullableFilter<"Album"> | number | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistNullableRelationFilter, ArtistWhereInput> | null
    likedAlbums?: LikedAlbumsListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    artistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    artist?: ArtistOrderByWithRelationInput
    likedAlbums?: LikedAlbumsOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    image_url?: StringFilter<"Album"> | string
    artistId?: IntNullableFilter<"Album"> | number | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistNullableRelationFilter, ArtistWhereInput> | null
    likedAlbums?: LikedAlbumsListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    artistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    title?: StringWithAggregatesFilter<"Album"> | string
    image_url?: StringWithAggregatesFilter<"Album"> | string
    artistId?: IntNullableWithAggregatesFilter<"Album"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: IntFilter<"Song"> | number
    title?: StringFilter<"Song"> | string
    image_url?: StringFilter<"Song"> | string
    song_url?: StringFilter<"Song"> | string
    playlistId?: IntNullableFilter<"Song"> | number | null
    albumId?: IntNullableFilter<"Song"> | number | null
    artistId?: IntFilter<"Song"> | number
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    playlist?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
    album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    user?: UserListRelationFilter
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    likedSongs?: LikedSongsListRelationFilter
    playlistSongs?: PlaylistSongsListRelationFilter
    video?: VideoListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    song_url?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
    user?: UserOrderByRelationAggregateInput
    artist?: ArtistOrderByWithRelationInput
    likedSongs?: LikedSongsOrderByRelationAggregateInput
    playlistSongs?: PlaylistSongsOrderByRelationAggregateInput
    video?: VideoOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    image_url?: StringFilter<"Song"> | string
    song_url?: StringFilter<"Song"> | string
    playlistId?: IntNullableFilter<"Song"> | number | null
    albumId?: IntNullableFilter<"Song"> | number | null
    artistId?: IntFilter<"Song"> | number
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    playlist?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
    album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    user?: UserListRelationFilter
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    likedSongs?: LikedSongsListRelationFilter
    playlistSongs?: PlaylistSongsListRelationFilter
    video?: VideoListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    song_url?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Song"> | number
    title?: StringWithAggregatesFilter<"Song"> | string
    image_url?: StringWithAggregatesFilter<"Song"> | string
    song_url?: StringWithAggregatesFilter<"Song"> | string
    playlistId?: IntNullableWithAggregatesFilter<"Song"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Song"> | number | null
    artistId?: IntWithAggregatesFilter<"Song"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type LikedSongsWhereInput = {
    AND?: LikedSongsWhereInput | LikedSongsWhereInput[]
    OR?: LikedSongsWhereInput[]
    NOT?: LikedSongsWhereInput | LikedSongsWhereInput[]
    id?: IntFilter<"LikedSongs"> | number
    userId?: StringFilter<"LikedSongs"> | string
    songId?: IntFilter<"LikedSongs"> | number
    createdAt?: DateTimeFilter<"LikedSongs"> | Date | string
    updatedAt?: DateTimeFilter<"LikedSongs"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    song?: XOR<SongRelationFilter, SongWhereInput>
  }

  export type LikedSongsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type LikedSongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikedSongsWhereInput | LikedSongsWhereInput[]
    OR?: LikedSongsWhereInput[]
    NOT?: LikedSongsWhereInput | LikedSongsWhereInput[]
    userId?: StringFilter<"LikedSongs"> | string
    songId?: IntFilter<"LikedSongs"> | number
    createdAt?: DateTimeFilter<"LikedSongs"> | Date | string
    updatedAt?: DateTimeFilter<"LikedSongs"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    song?: XOR<SongRelationFilter, SongWhereInput>
  }, "id">

  export type LikedSongsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikedSongsCountOrderByAggregateInput
    _avg?: LikedSongsAvgOrderByAggregateInput
    _max?: LikedSongsMaxOrderByAggregateInput
    _min?: LikedSongsMinOrderByAggregateInput
    _sum?: LikedSongsSumOrderByAggregateInput
  }

  export type LikedSongsScalarWhereWithAggregatesInput = {
    AND?: LikedSongsScalarWhereWithAggregatesInput | LikedSongsScalarWhereWithAggregatesInput[]
    OR?: LikedSongsScalarWhereWithAggregatesInput[]
    NOT?: LikedSongsScalarWhereWithAggregatesInput | LikedSongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedSongs"> | number
    userId?: StringWithAggregatesFilter<"LikedSongs"> | string
    songId?: IntWithAggregatesFilter<"LikedSongs"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikedSongs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LikedSongs"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    name?: StringFilter<"Artist"> | string
    avatar_url?: StringFilter<"Artist"> | string
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    likedArtists?: LikedArtistsListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    albums?: AlbumOrderByRelationAggregateInput
    likedArtists?: LikedArtistsOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    avatar_url?: StringFilter<"Artist"> | string
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    likedArtists?: LikedArtistsListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    name?: StringWithAggregatesFilter<"Artist"> | string
    avatar_url?: StringWithAggregatesFilter<"Artist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type LikedArtistsWhereInput = {
    AND?: LikedArtistsWhereInput | LikedArtistsWhereInput[]
    OR?: LikedArtistsWhereInput[]
    NOT?: LikedArtistsWhereInput | LikedArtistsWhereInput[]
    id?: IntFilter<"LikedArtists"> | number
    userId?: StringFilter<"LikedArtists"> | string
    artistId?: IntFilter<"LikedArtists"> | number
    createdAt?: DateTimeFilter<"LikedArtists"> | Date | string
    updatedAt?: DateTimeFilter<"LikedArtists"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type LikedArtistsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type LikedArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikedArtistsWhereInput | LikedArtistsWhereInput[]
    OR?: LikedArtistsWhereInput[]
    NOT?: LikedArtistsWhereInput | LikedArtistsWhereInput[]
    userId?: StringFilter<"LikedArtists"> | string
    artistId?: IntFilter<"LikedArtists"> | number
    createdAt?: DateTimeFilter<"LikedArtists"> | Date | string
    updatedAt?: DateTimeFilter<"LikedArtists"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }, "id">

  export type LikedArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikedArtistsCountOrderByAggregateInput
    _avg?: LikedArtistsAvgOrderByAggregateInput
    _max?: LikedArtistsMaxOrderByAggregateInput
    _min?: LikedArtistsMinOrderByAggregateInput
    _sum?: LikedArtistsSumOrderByAggregateInput
  }

  export type LikedArtistsScalarWhereWithAggregatesInput = {
    AND?: LikedArtistsScalarWhereWithAggregatesInput | LikedArtistsScalarWhereWithAggregatesInput[]
    OR?: LikedArtistsScalarWhereWithAggregatesInput[]
    NOT?: LikedArtistsScalarWhereWithAggregatesInput | LikedArtistsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedArtists"> | number
    userId?: StringWithAggregatesFilter<"LikedArtists"> | string
    artistId?: IntWithAggregatesFilter<"LikedArtists"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikedArtists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LikedArtists"> | Date | string
  }

  export type LikedAlbumsWhereInput = {
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    id?: IntFilter<"LikedAlbums"> | number
    userId?: StringFilter<"LikedAlbums"> | string
    albumId?: IntFilter<"LikedAlbums"> | number
    createdAt?: DateTimeFilter<"LikedAlbums"> | Date | string
    updatedAt?: DateTimeFilter<"LikedAlbums"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
  }

  export type LikedAlbumsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
  }

  export type LikedAlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    userId?: StringFilter<"LikedAlbums"> | string
    albumId?: IntFilter<"LikedAlbums"> | number
    createdAt?: DateTimeFilter<"LikedAlbums"> | Date | string
    updatedAt?: DateTimeFilter<"LikedAlbums"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
  }, "id">

  export type LikedAlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikedAlbumsCountOrderByAggregateInput
    _avg?: LikedAlbumsAvgOrderByAggregateInput
    _max?: LikedAlbumsMaxOrderByAggregateInput
    _min?: LikedAlbumsMinOrderByAggregateInput
    _sum?: LikedAlbumsSumOrderByAggregateInput
  }

  export type LikedAlbumsScalarWhereWithAggregatesInput = {
    AND?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    OR?: LikedAlbumsScalarWhereWithAggregatesInput[]
    NOT?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedAlbums"> | number
    userId?: StringWithAggregatesFilter<"LikedAlbums"> | string
    albumId?: IntWithAggregatesFilter<"LikedAlbums"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikedAlbums"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LikedAlbums"> | Date | string
  }

  export type PlaylistSongsWhereInput = {
    AND?: PlaylistSongsWhereInput | PlaylistSongsWhereInput[]
    OR?: PlaylistSongsWhereInput[]
    NOT?: PlaylistSongsWhereInput | PlaylistSongsWhereInput[]
    id?: IntFilter<"PlaylistSongs"> | number
    playlistId?: IntFilter<"PlaylistSongs"> | number
    songId?: IntFilter<"PlaylistSongs"> | number
    createdAt?: DateTimeFilter<"PlaylistSongs"> | Date | string
    playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    song?: XOR<SongRelationFilter, SongWhereInput>
  }

  export type PlaylistSongsOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type PlaylistSongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistSongsWhereInput | PlaylistSongsWhereInput[]
    OR?: PlaylistSongsWhereInput[]
    NOT?: PlaylistSongsWhereInput | PlaylistSongsWhereInput[]
    playlistId?: IntFilter<"PlaylistSongs"> | number
    songId?: IntFilter<"PlaylistSongs"> | number
    createdAt?: DateTimeFilter<"PlaylistSongs"> | Date | string
    playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    song?: XOR<SongRelationFilter, SongWhereInput>
  }, "id">

  export type PlaylistSongsOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    _count?: PlaylistSongsCountOrderByAggregateInput
    _avg?: PlaylistSongsAvgOrderByAggregateInput
    _max?: PlaylistSongsMaxOrderByAggregateInput
    _min?: PlaylistSongsMinOrderByAggregateInput
    _sum?: PlaylistSongsSumOrderByAggregateInput
  }

  export type PlaylistSongsScalarWhereWithAggregatesInput = {
    AND?: PlaylistSongsScalarWhereWithAggregatesInput | PlaylistSongsScalarWhereWithAggregatesInput[]
    OR?: PlaylistSongsScalarWhereWithAggregatesInput[]
    NOT?: PlaylistSongsScalarWhereWithAggregatesInput | PlaylistSongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlaylistSongs"> | number
    playlistId?: IntWithAggregatesFilter<"PlaylistSongs"> | number
    songId?: IntWithAggregatesFilter<"PlaylistSongs"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlaylistSongs"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    video_url?: StringFilter<"Video"> | string
    songId?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    video_url?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    song?: SongOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    video_url?: StringFilter<"Video"> | string
    songId?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    video_url?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    video_url?: StringWithAggregatesFilter<"Video"> | string
    songId?: IntWithAggregatesFilter<"Video"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsCreateNestedManyWithoutUserInput
    songs?: SongCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutUserInput
    songs?: SongUncheckedCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutUserNestedInput
    songs?: SongUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutUserNestedInput
    songs?: SongUncheckedUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
    songs?: SongCreateNestedManyWithoutPlaylistInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    title: string
    image_url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    songs?: SongUpdateManyWithoutPlaylistNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    title: string
    image_url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    title: string
    image_url: string
    artistId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    title: string
    image_url: string
    artistId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedSongsInput
    song: SongCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongsUncheckedCreateInput = {
    id?: number
    userId: string
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedSongsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
    song?: SongUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsCreateManyInput = {
    id?: number
    userId: string
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedSongsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedArtistsInput
    artist: ArtistCreateNestedOneWithoutLikedArtistsInput
  }

  export type LikedArtistsUncheckedCreateInput = {
    id?: number
    userId: string
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedArtistsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutLikedArtistsNestedInput
  }

  export type LikedArtistsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsCreateManyInput = {
    id?: number
    userId: string
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedAlbumsInput
    album: AlbumCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateInput = {
    id?: number
    userId: string
    albumId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
    album?: AlbumUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsCreateManyInput = {
    id?: number
    userId: string
    albumId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsCreateInput = {
    createdAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutPlaylistSongsInput
    song: SongCreateNestedOneWithoutPlaylistSongsInput
  }

  export type PlaylistSongsUncheckedCreateInput = {
    id?: number
    playlistId: number
    songId: number
    createdAt?: Date | string
  }

  export type PlaylistSongsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput
    song?: SongUpdateOneRequiredWithoutPlaylistSongsNestedInput
  }

  export type PlaylistSongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsCreateManyInput = {
    id?: number
    playlistId: number
    songId: number
    createdAt?: Date | string
  }

  export type PlaylistSongsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    video_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    song: SongCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    video_url: string
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    video_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_url?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: number
    video_url: string
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    video_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_url?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type LikedSongsListRelationFilter = {
    every?: LikedSongsWhereInput
    some?: LikedSongsWhereInput
    none?: LikedSongsWhereInput
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type LikedArtistsListRelationFilter = {
    every?: LikedArtistsWhereInput
    some?: LikedArtistsWhereInput
    none?: LikedArtistsWhereInput
  }

  export type LikedAlbumsListRelationFilter = {
    every?: LikedAlbumsWhereInput
    some?: LikedAlbumsWhereInput
    none?: LikedAlbumsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedSongsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedArtistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedAlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    avatar_url?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar_url?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    avatar_url?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaylistSongsListRelationFilter = {
    every?: PlaylistSongsWhereInput
    some?: PlaylistSongsWhereInput
    none?: PlaylistSongsWhereInput
  }

  export type PlaylistSongsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtistNullableRelationFilter = {
    is?: ArtistWhereInput | null
    isNot?: ArtistWhereInput | null
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlaylistNullableRelationFilter = {
    is?: PlaylistWhereInput | null
    isNot?: PlaylistWhereInput | null
  }

  export type AlbumNullableRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ArtistRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    song_url?: SortOrder
    playlistId?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    song_url?: SortOrder
    playlistId?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image_url?: SortOrder
    song_url?: SortOrder
    playlistId?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type SongRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type LikedSongsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedSongsAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type LikedSongsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedSongsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedSongsSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LikedArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedArtistsAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type LikedArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedArtistsSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type LikedAlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedAlbumsAvgOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
  }

  export type LikedAlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedAlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedAlbumsSumOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
  }

  export type PlaylistRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistSongsCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistSongsAvgOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
  }

  export type PlaylistSongsMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistSongsMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistSongsSumOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type LikedSongsCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput> | LikedSongsCreateWithoutUserInput[] | LikedSongsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutUserInput | LikedSongsCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongsCreateManyUserInputEnvelope
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutUserInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedArtistsCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput> | LikedArtistsCreateWithoutUserInput[] | LikedArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutUserInput | LikedArtistsCreateOrConnectWithoutUserInput[]
    createMany?: LikedArtistsCreateManyUserInputEnvelope
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
  }

  export type LikedAlbumsCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type LikedSongsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput> | LikedSongsCreateWithoutUserInput[] | LikedSongsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutUserInput | LikedSongsCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongsCreateManyUserInputEnvelope
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedArtistsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput> | LikedArtistsCreateWithoutUserInput[] | LikedArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutUserInput | LikedArtistsCreateOrConnectWithoutUserInput[]
    createMany?: LikedArtistsCreateManyUserInputEnvelope
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
  }

  export type LikedAlbumsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type LikedSongsUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput> | LikedSongsCreateWithoutUserInput[] | LikedSongsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutUserInput | LikedSongsCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongsUpsertWithWhereUniqueWithoutUserInput | LikedSongsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongsCreateManyUserInputEnvelope
    set?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    disconnect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    delete?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    update?: LikedSongsUpdateWithWhereUniqueWithoutUserInput | LikedSongsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongsUpdateManyWithWhereWithoutUserInput | LikedSongsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
  }

  export type SongUpdateManyWithoutUserNestedInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserInput | SongUpsertWithWhereUniqueWithoutUserInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserInput | SongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserInput | SongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedArtistsUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput> | LikedArtistsCreateWithoutUserInput[] | LikedArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutUserInput | LikedArtistsCreateOrConnectWithoutUserInput[]
    upsert?: LikedArtistsUpsertWithWhereUniqueWithoutUserInput | LikedArtistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedArtistsCreateManyUserInputEnvelope
    set?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    disconnect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    delete?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    update?: LikedArtistsUpdateWithWhereUniqueWithoutUserInput | LikedArtistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedArtistsUpdateManyWithWhereWithoutUserInput | LikedArtistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
  }

  export type LikedAlbumsUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutUserInput | LikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutUserInput | LikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutUserInput | LikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type LikedSongsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput> | LikedSongsCreateWithoutUserInput[] | LikedSongsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutUserInput | LikedSongsCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongsUpsertWithWhereUniqueWithoutUserInput | LikedSongsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongsCreateManyUserInputEnvelope
    set?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    disconnect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    delete?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    update?: LikedSongsUpdateWithWhereUniqueWithoutUserInput | LikedSongsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongsUpdateManyWithWhereWithoutUserInput | LikedSongsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserInput | SongUpsertWithWhereUniqueWithoutUserInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserInput | SongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserInput | SongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedArtistsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput> | LikedArtistsCreateWithoutUserInput[] | LikedArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutUserInput | LikedArtistsCreateOrConnectWithoutUserInput[]
    upsert?: LikedArtistsUpsertWithWhereUniqueWithoutUserInput | LikedArtistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedArtistsCreateManyUserInputEnvelope
    set?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    disconnect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    delete?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    update?: LikedArtistsUpdateWithWhereUniqueWithoutUserInput | LikedArtistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedArtistsUpdateManyWithWhereWithoutUserInput | LikedArtistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutUserInput | LikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutUserInput | LikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutUserInput | LikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type PlaylistSongsCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput> | PlaylistSongsCreateWithoutPlaylistInput[] | PlaylistSongsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutPlaylistInput | PlaylistSongsCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistSongsCreateManyPlaylistInputEnvelope
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type PlaylistSongsUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput> | PlaylistSongsCreateWithoutPlaylistInput[] | PlaylistSongsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutPlaylistInput | PlaylistSongsCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistSongsCreateManyPlaylistInputEnvelope
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type SongUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type PlaylistSongsUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput> | PlaylistSongsCreateWithoutPlaylistInput[] | PlaylistSongsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutPlaylistInput | PlaylistSongsCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistSongsUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistSongsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistSongsCreateManyPlaylistInputEnvelope
    set?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    disconnect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    delete?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    update?: PlaylistSongsUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistSongsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistSongsUpdateManyWithWhereWithoutPlaylistInput | PlaylistSongsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SongUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: SongCreateManyPlaylistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type PlaylistSongsUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput> | PlaylistSongsCreateWithoutPlaylistInput[] | PlaylistSongsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutPlaylistInput | PlaylistSongsCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistSongsUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistSongsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistSongsCreateManyPlaylistInputEnvelope
    set?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    disconnect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    delete?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    update?: PlaylistSongsUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistSongsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistSongsUpdateManyWithWhereWithoutPlaylistInput | PlaylistSongsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
  }

  export type LikedAlbumsCreateNestedManyWithoutAlbumInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput> | LikedAlbumsCreateWithoutAlbumInput[] | LikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumInput | LikedAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: LikedAlbumsCreateManyAlbumInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput> | LikedAlbumsCreateWithoutAlbumInput[] | LikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumInput | LikedAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: LikedAlbumsCreateManyAlbumInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateOneWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistUpsertWithoutAlbumsInput
    disconnect?: ArtistWhereInput | boolean
    delete?: ArtistWhereInput | boolean
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumsInput, ArtistUpdateWithoutAlbumsInput>, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type LikedAlbumsUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput> | LikedAlbumsCreateWithoutAlbumInput[] | LikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumInput | LikedAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput | LikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: LikedAlbumsCreateManyAlbumInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput | LikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutAlbumInput | LikedAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SongUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput> | LikedAlbumsCreateWithoutAlbumInput[] | LikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumInput | LikedAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput | LikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: LikedAlbumsCreateManyAlbumInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput | LikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutAlbumInput | LikedAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutSongsInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSongsInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput> | UserCreateWithoutSongsInput[] | UserUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput | UserCreateOrConnectWithoutSongsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ArtistCreateNestedOneWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput
    connect?: ArtistWhereUniqueInput
  }

  export type LikedSongsCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput> | LikedSongsCreateWithoutSongInput[] | LikedSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutSongInput | LikedSongsCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongsCreateManySongInputEnvelope
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
  }

  export type PlaylistSongsCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput> | PlaylistSongsCreateWithoutSongInput[] | PlaylistSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutSongInput | PlaylistSongsCreateOrConnectWithoutSongInput[]
    createMany?: PlaylistSongsCreateManySongInputEnvelope
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutSongInput = {
    create?: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput> | VideoCreateWithoutSongInput[] | VideoUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSongInput | VideoCreateOrConnectWithoutSongInput[]
    createMany?: VideoCreateManySongInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput> | UserCreateWithoutSongsInput[] | UserUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput | UserCreateOrConnectWithoutSongsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LikedSongsUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput> | LikedSongsCreateWithoutSongInput[] | LikedSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutSongInput | LikedSongsCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongsCreateManySongInputEnvelope
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
  }

  export type PlaylistSongsUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput> | PlaylistSongsCreateWithoutSongInput[] | PlaylistSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutSongInput | PlaylistSongsCreateOrConnectWithoutSongInput[]
    createMany?: PlaylistSongsCreateManySongInputEnvelope
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput> | VideoCreateWithoutSongInput[] | VideoUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSongInput | VideoCreateOrConnectWithoutSongInput[]
    createMany?: VideoCreateManySongInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type PlaylistUpdateOneWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput
    upsert?: PlaylistUpsertWithoutSongsInput
    disconnect?: PlaylistWhereInput | boolean
    delete?: PlaylistWhereInput | boolean
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutSongsInput, PlaylistUpdateWithoutSongsInput>, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type AlbumUpdateOneWithoutSongsNestedInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    upsert?: AlbumUpsertWithoutSongsInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutSongsInput, AlbumUpdateWithoutSongsInput>, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type UserUpdateManyWithoutSongsNestedInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput> | UserCreateWithoutSongsInput[] | UserUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput | UserCreateOrConnectWithoutSongsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSongsInput | UserUpsertWithWhereUniqueWithoutSongsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSongsInput | UserUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSongsInput | UserUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ArtistUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput
    upsert?: ArtistUpsertWithoutSongsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutSongsInput, ArtistUpdateWithoutSongsInput>, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type LikedSongsUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput> | LikedSongsCreateWithoutSongInput[] | LikedSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutSongInput | LikedSongsCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongsUpsertWithWhereUniqueWithoutSongInput | LikedSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongsCreateManySongInputEnvelope
    set?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    disconnect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    delete?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    update?: LikedSongsUpdateWithWhereUniqueWithoutSongInput | LikedSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongsUpdateManyWithWhereWithoutSongInput | LikedSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
  }

  export type PlaylistSongsUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput> | PlaylistSongsCreateWithoutSongInput[] | PlaylistSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutSongInput | PlaylistSongsCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistSongsUpsertWithWhereUniqueWithoutSongInput | PlaylistSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlaylistSongsCreateManySongInputEnvelope
    set?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    disconnect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    delete?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    update?: PlaylistSongsUpdateWithWhereUniqueWithoutSongInput | PlaylistSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistSongsUpdateManyWithWhereWithoutSongInput | PlaylistSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutSongNestedInput = {
    create?: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput> | VideoCreateWithoutSongInput[] | VideoUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSongInput | VideoCreateOrConnectWithoutSongInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutSongInput | VideoUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: VideoCreateManySongInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutSongInput | VideoUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutSongInput | VideoUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput> | UserCreateWithoutSongsInput[] | UserUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput | UserCreateOrConnectWithoutSongsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSongsInput | UserUpsertWithWhereUniqueWithoutSongsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSongsInput | UserUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSongsInput | UserUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LikedSongsUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput> | LikedSongsCreateWithoutSongInput[] | LikedSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongsCreateOrConnectWithoutSongInput | LikedSongsCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongsUpsertWithWhereUniqueWithoutSongInput | LikedSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongsCreateManySongInputEnvelope
    set?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    disconnect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    delete?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    connect?: LikedSongsWhereUniqueInput | LikedSongsWhereUniqueInput[]
    update?: LikedSongsUpdateWithWhereUniqueWithoutSongInput | LikedSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongsUpdateManyWithWhereWithoutSongInput | LikedSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
  }

  export type PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput> | PlaylistSongsCreateWithoutSongInput[] | PlaylistSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongsCreateOrConnectWithoutSongInput | PlaylistSongsCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistSongsUpsertWithWhereUniqueWithoutSongInput | PlaylistSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlaylistSongsCreateManySongInputEnvelope
    set?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    disconnect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    delete?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    connect?: PlaylistSongsWhereUniqueInput | PlaylistSongsWhereUniqueInput[]
    update?: PlaylistSongsUpdateWithWhereUniqueWithoutSongInput | PlaylistSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistSongsUpdateManyWithWhereWithoutSongInput | PlaylistSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput> | VideoCreateWithoutSongInput[] | VideoUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSongInput | VideoCreateOrConnectWithoutSongInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutSongInput | VideoUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: VideoCreateManySongInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutSongInput | VideoUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutSongInput | VideoUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikedSongsInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutLikedSongsInput = {
    create?: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongsInput
    connect?: SongWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedSongsNestedInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    upsert?: UserUpsertWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedSongsInput, UserUpdateWithoutLikedSongsInput>, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongUpdateOneRequiredWithoutLikedSongsNestedInput = {
    create?: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongsInput
    upsert?: SongUpsertWithoutLikedSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutLikedSongsInput, SongUpdateWithoutLikedSongsInput>, SongUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    createMany?: SongCreateManyArtistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type LikedArtistsCreateNestedManyWithoutArtistInput = {
    create?: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput> | LikedArtistsCreateWithoutArtistInput[] | LikedArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutArtistInput | LikedArtistsCreateOrConnectWithoutArtistInput[]
    createMany?: LikedArtistsCreateManyArtistInputEnvelope
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    createMany?: SongCreateManyArtistInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type LikedArtistsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput> | LikedArtistsCreateWithoutArtistInput[] | LikedArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutArtistInput | LikedArtistsCreateOrConnectWithoutArtistInput[]
    createMany?: LikedArtistsCreateManyArtistInputEnvelope
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SongCreateManyArtistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type LikedArtistsUpdateManyWithoutArtistNestedInput = {
    create?: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput> | LikedArtistsCreateWithoutArtistInput[] | LikedArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutArtistInput | LikedArtistsCreateOrConnectWithoutArtistInput[]
    upsert?: LikedArtistsUpsertWithWhereUniqueWithoutArtistInput | LikedArtistsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: LikedArtistsCreateManyArtistInputEnvelope
    set?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    disconnect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    delete?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    update?: LikedArtistsUpdateWithWhereUniqueWithoutArtistInput | LikedArtistsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: LikedArtistsUpdateManyWithWhereWithoutArtistInput | LikedArtistsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SongCreateManyArtistInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type LikedArtistsUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput> | LikedArtistsCreateWithoutArtistInput[] | LikedArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: LikedArtistsCreateOrConnectWithoutArtistInput | LikedArtistsCreateOrConnectWithoutArtistInput[]
    upsert?: LikedArtistsUpsertWithWhereUniqueWithoutArtistInput | LikedArtistsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: LikedArtistsCreateManyArtistInputEnvelope
    set?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    disconnect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    delete?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    connect?: LikedArtistsWhereUniqueInput | LikedArtistsWhereUniqueInput[]
    update?: LikedArtistsUpdateWithWhereUniqueWithoutArtistInput | LikedArtistsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: LikedArtistsUpdateManyWithWhereWithoutArtistInput | LikedArtistsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikedArtistsInput = {
    create?: XOR<UserCreateWithoutLikedArtistsInput, UserUncheckedCreateWithoutLikedArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedArtistsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutLikedArtistsInput = {
    create?: XOR<ArtistCreateWithoutLikedArtistsInput, ArtistUncheckedCreateWithoutLikedArtistsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutLikedArtistsInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedArtistsNestedInput = {
    create?: XOR<UserCreateWithoutLikedArtistsInput, UserUncheckedCreateWithoutLikedArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedArtistsInput
    upsert?: UserUpsertWithoutLikedArtistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedArtistsInput, UserUpdateWithoutLikedArtistsInput>, UserUncheckedUpdateWithoutLikedArtistsInput>
  }

  export type ArtistUpdateOneRequiredWithoutLikedArtistsNestedInput = {
    create?: XOR<ArtistCreateWithoutLikedArtistsInput, ArtistUncheckedCreateWithoutLikedArtistsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutLikedArtistsInput
    upsert?: ArtistUpsertWithoutLikedArtistsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutLikedArtistsInput, ArtistUpdateWithoutLikedArtistsInput>, ArtistUncheckedUpdateWithoutLikedArtistsInput>
  }

  export type UserCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<AlbumCreateWithoutLikedAlbumsInput, AlbumUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutLikedAlbumsInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    upsert?: UserUpsertWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedAlbumsInput, UserUpdateWithoutLikedAlbumsInput>, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumUpdateOneRequiredWithoutLikedAlbumsNestedInput = {
    create?: XOR<AlbumCreateWithoutLikedAlbumsInput, AlbumUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutLikedAlbumsInput
    upsert?: AlbumUpsertWithoutLikedAlbumsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutLikedAlbumsInput, AlbumUpdateWithoutLikedAlbumsInput>, AlbumUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type PlaylistCreateNestedOneWithoutPlaylistSongsInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutPlaylistSongsInput = {
    create?: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongsInput
    connect?: SongWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongsInput
    upsert?: PlaylistUpsertWithoutPlaylistSongsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput, PlaylistUpdateWithoutPlaylistSongsInput>, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type SongUpdateOneRequiredWithoutPlaylistSongsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongsInput
    upsert?: SongUpsertWithoutPlaylistSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutPlaylistSongsInput, SongUpdateWithoutPlaylistSongsInput>, SongUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type SongCreateNestedOneWithoutVideoInput = {
    create?: XOR<SongCreateWithoutVideoInput, SongUncheckedCreateWithoutVideoInput>
    connectOrCreate?: SongCreateOrConnectWithoutVideoInput
    connect?: SongWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<SongCreateWithoutVideoInput, SongUncheckedCreateWithoutVideoInput>
    connectOrCreate?: SongCreateOrConnectWithoutVideoInput
    upsert?: SongUpsertWithoutVideoInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutVideoInput, SongUpdateWithoutVideoInput>, SongUncheckedUpdateWithoutVideoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlaylistCreateWithoutUserInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedSongsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    song: SongCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongsUncheckedCreateWithoutUserInput = {
    id?: number
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedSongsCreateOrConnectWithoutUserInput = {
    where: LikedSongsWhereUniqueInput
    create: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput>
  }

  export type LikedSongsCreateManyUserInputEnvelope = {
    data: LikedSongsCreateManyUserInput | LikedSongsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SongCreateWithoutUserInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUserInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput>
  }

  export type LikedArtistsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutLikedArtistsInput
  }

  export type LikedArtistsUncheckedCreateWithoutUserInput = {
    id?: number
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsCreateOrConnectWithoutUserInput = {
    where: LikedArtistsWhereUniqueInput
    create: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput>
  }

  export type LikedArtistsCreateManyUserInputEnvelope = {
    data: LikedArtistsCreateManyUserInput | LikedArtistsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedAlbumsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateWithoutUserInput = {
    id?: number
    albumId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsCreateOrConnectWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    create: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumsCreateManyUserInputEnvelope = {
    data: LikedAlbumsCreateManyUserInput | LikedAlbumsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: IntFilter<"Playlist"> | number
    title?: StringFilter<"Playlist"> | string
    image_url?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type LikedSongsUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedSongsWhereUniqueInput
    update: XOR<LikedSongsUpdateWithoutUserInput, LikedSongsUncheckedUpdateWithoutUserInput>
    create: XOR<LikedSongsCreateWithoutUserInput, LikedSongsUncheckedCreateWithoutUserInput>
  }

  export type LikedSongsUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedSongsWhereUniqueInput
    data: XOR<LikedSongsUpdateWithoutUserInput, LikedSongsUncheckedUpdateWithoutUserInput>
  }

  export type LikedSongsUpdateManyWithWhereWithoutUserInput = {
    where: LikedSongsScalarWhereInput
    data: XOR<LikedSongsUpdateManyMutationInput, LikedSongsUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedSongsScalarWhereInput = {
    AND?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
    OR?: LikedSongsScalarWhereInput[]
    NOT?: LikedSongsScalarWhereInput | LikedSongsScalarWhereInput[]
    id?: IntFilter<"LikedSongs"> | number
    userId?: StringFilter<"LikedSongs"> | string
    songId?: IntFilter<"LikedSongs"> | number
    createdAt?: DateTimeFilter<"LikedSongs"> | Date | string
    updatedAt?: DateTimeFilter<"LikedSongs"> | Date | string
  }

  export type SongUpsertWithWhereUniqueWithoutUserInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUserInput, SongUncheckedUpdateWithoutUserInput>
    create: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUserInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUserInput, SongUncheckedUpdateWithoutUserInput>
  }

  export type SongUpdateManyWithWhereWithoutUserInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUserInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: IntFilter<"Song"> | number
    title?: StringFilter<"Song"> | string
    image_url?: StringFilter<"Song"> | string
    song_url?: StringFilter<"Song"> | string
    playlistId?: IntNullableFilter<"Song"> | number | null
    albumId?: IntNullableFilter<"Song"> | number | null
    artistId?: IntFilter<"Song"> | number
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
  }

  export type LikedArtistsUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedArtistsWhereUniqueInput
    update: XOR<LikedArtistsUpdateWithoutUserInput, LikedArtistsUncheckedUpdateWithoutUserInput>
    create: XOR<LikedArtistsCreateWithoutUserInput, LikedArtistsUncheckedCreateWithoutUserInput>
  }

  export type LikedArtistsUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedArtistsWhereUniqueInput
    data: XOR<LikedArtistsUpdateWithoutUserInput, LikedArtistsUncheckedUpdateWithoutUserInput>
  }

  export type LikedArtistsUpdateManyWithWhereWithoutUserInput = {
    where: LikedArtistsScalarWhereInput
    data: XOR<LikedArtistsUpdateManyMutationInput, LikedArtistsUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedArtistsScalarWhereInput = {
    AND?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
    OR?: LikedArtistsScalarWhereInput[]
    NOT?: LikedArtistsScalarWhereInput | LikedArtistsScalarWhereInput[]
    id?: IntFilter<"LikedArtists"> | number
    userId?: StringFilter<"LikedArtists"> | string
    artistId?: IntFilter<"LikedArtists"> | number
    createdAt?: DateTimeFilter<"LikedArtists"> | Date | string
    updatedAt?: DateTimeFilter<"LikedArtists"> | Date | string
  }

  export type LikedAlbumsUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    update: XOR<LikedAlbumsUpdateWithoutUserInput, LikedAlbumsUncheckedUpdateWithoutUserInput>
    create: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumsUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    data: XOR<LikedAlbumsUpdateWithoutUserInput, LikedAlbumsUncheckedUpdateWithoutUserInput>
  }

  export type LikedAlbumsUpdateManyWithWhereWithoutUserInput = {
    where: LikedAlbumsScalarWhereInput
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedAlbumsScalarWhereInput = {
    AND?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
    OR?: LikedAlbumsScalarWhereInput[]
    NOT?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
    id?: IntFilter<"LikedAlbums"> | number
    userId?: StringFilter<"LikedAlbums"> | string
    albumId?: IntFilter<"LikedAlbums"> | number
    createdAt?: DateTimeFilter<"LikedAlbums"> | Date | string
    updatedAt?: DateTimeFilter<"LikedAlbums"> | Date | string
  }

  export type UserCreateWithoutPlaylistsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likedSongs?: LikedSongsCreateNestedManyWithoutUserInput
    songs?: SongCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutUserInput
    songs?: SongUncheckedCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type SongCreateWithoutPlaylistInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type SongCreateManyPlaylistInputEnvelope = {
    data: SongCreateManyPlaylistInput | SongCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistSongsCreateWithoutPlaylistInput = {
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutPlaylistSongsInput
  }

  export type PlaylistSongsUncheckedCreateWithoutPlaylistInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type PlaylistSongsCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistSongsWhereUniqueInput
    create: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistSongsCreateManyPlaylistInputEnvelope = {
    data: PlaylistSongsCreateManyPlaylistInput | PlaylistSongsCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedSongs?: LikedSongsUpdateManyWithoutUserNestedInput
    songs?: SongUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutUserNestedInput
    songs?: SongUncheckedUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistSongsUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistSongsWhereUniqueInput
    update: XOR<PlaylistSongsUpdateWithoutPlaylistInput, PlaylistSongsUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistSongsCreateWithoutPlaylistInput, PlaylistSongsUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistSongsUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistSongsWhereUniqueInput
    data: XOR<PlaylistSongsUpdateWithoutPlaylistInput, PlaylistSongsUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistSongsUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistSongsScalarWhereInput
    data: XOR<PlaylistSongsUpdateManyMutationInput, PlaylistSongsUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistSongsScalarWhereInput = {
    AND?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
    OR?: PlaylistSongsScalarWhereInput[]
    NOT?: PlaylistSongsScalarWhereInput | PlaylistSongsScalarWhereInput[]
    id?: IntFilter<"PlaylistSongs"> | number
    playlistId?: IntFilter<"PlaylistSongs"> | number
    songId?: IntFilter<"PlaylistSongs"> | number
    createdAt?: DateTimeFilter<"PlaylistSongs"> | Date | string
  }

  export type SongCreateWithoutAlbumInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutAlbumInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutAlbumInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongCreateManyAlbumInputEnvelope = {
    data: SongCreateManyAlbumInput | SongCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistCreateWithoutAlbumsInput = {
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id?: number
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type LikedAlbumsCreateWithoutAlbumInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateWithoutAlbumInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsCreateOrConnectWithoutAlbumInput = {
    where: LikedAlbumsWhereUniqueInput
    create: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type LikedAlbumsCreateManyAlbumInputEnvelope = {
    data: LikedAlbumsCreateManyAlbumInput | LikedAlbumsCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type SongUpsertWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpdateWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
  }

  export type SongUpdateManyWithWhereWithoutAlbumInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ArtistUpsertWithoutAlbumsInput = {
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type LikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput = {
    where: LikedAlbumsWhereUniqueInput
    update: XOR<LikedAlbumsUpdateWithoutAlbumInput, LikedAlbumsUncheckedUpdateWithoutAlbumInput>
    create: XOR<LikedAlbumsCreateWithoutAlbumInput, LikedAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type LikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput = {
    where: LikedAlbumsWhereUniqueInput
    data: XOR<LikedAlbumsUpdateWithoutAlbumInput, LikedAlbumsUncheckedUpdateWithoutAlbumInput>
  }

  export type LikedAlbumsUpdateManyWithWhereWithoutAlbumInput = {
    where: LikedAlbumsScalarWhereInput
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyWithoutAlbumInput>
  }

  export type PlaylistCreateWithoutSongsInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutSongsInput = {
    id?: number
    title: string
    image_url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type AlbumCreateWithoutSongsInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutSongsInput = {
    id?: number
    title: string
    image_url: string
    artistId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutSongsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
  }

  export type UserCreateWithoutSongsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSongsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
  }

  export type ArtistCreateWithoutSongsInput = {
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutSongsInput = {
    id?: number
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type LikedSongsCreateWithoutSongInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongsUncheckedCreateWithoutSongInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedSongsCreateOrConnectWithoutSongInput = {
    where: LikedSongsWhereUniqueInput
    create: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput>
  }

  export type LikedSongsCreateManySongInputEnvelope = {
    data: LikedSongsCreateManySongInput | LikedSongsCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistSongsCreateWithoutSongInput = {
    createdAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutPlaylistSongsInput
  }

  export type PlaylistSongsUncheckedCreateWithoutSongInput = {
    id?: number
    playlistId: number
    createdAt?: Date | string
  }

  export type PlaylistSongsCreateOrConnectWithoutSongInput = {
    where: PlaylistSongsWhereUniqueInput
    create: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput>
  }

  export type PlaylistSongsCreateManySongInputEnvelope = {
    data: PlaylistSongsCreateManySongInput | PlaylistSongsCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutSongInput = {
    video_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutSongInput = {
    id?: number
    video_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutSongInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput>
  }

  export type VideoCreateManySongInputEnvelope = {
    data: VideoCreateManySongInput | VideoCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithoutSongsInput = {
    update: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutSongsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistUpdateWithoutSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type AlbumUpsertWithoutSongsInput = {
    update: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSongsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type AlbumUpdateWithoutSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSongsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSongsInput, UserUncheckedUpdateWithoutSongsInput>
    create: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSongsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSongsInput, UserUncheckedUpdateWithoutSongsInput>
  }

  export type UserUpdateManyWithWhereWithoutSongsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSongsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ArtistUpsertWithoutSongsInput = {
    update: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutSongsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type ArtistUpdateWithoutSongsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type LikedSongsUpsertWithWhereUniqueWithoutSongInput = {
    where: LikedSongsWhereUniqueInput
    update: XOR<LikedSongsUpdateWithoutSongInput, LikedSongsUncheckedUpdateWithoutSongInput>
    create: XOR<LikedSongsCreateWithoutSongInput, LikedSongsUncheckedCreateWithoutSongInput>
  }

  export type LikedSongsUpdateWithWhereUniqueWithoutSongInput = {
    where: LikedSongsWhereUniqueInput
    data: XOR<LikedSongsUpdateWithoutSongInput, LikedSongsUncheckedUpdateWithoutSongInput>
  }

  export type LikedSongsUpdateManyWithWhereWithoutSongInput = {
    where: LikedSongsScalarWhereInput
    data: XOR<LikedSongsUpdateManyMutationInput, LikedSongsUncheckedUpdateManyWithoutSongInput>
  }

  export type PlaylistSongsUpsertWithWhereUniqueWithoutSongInput = {
    where: PlaylistSongsWhereUniqueInput
    update: XOR<PlaylistSongsUpdateWithoutSongInput, PlaylistSongsUncheckedUpdateWithoutSongInput>
    create: XOR<PlaylistSongsCreateWithoutSongInput, PlaylistSongsUncheckedCreateWithoutSongInput>
  }

  export type PlaylistSongsUpdateWithWhereUniqueWithoutSongInput = {
    where: PlaylistSongsWhereUniqueInput
    data: XOR<PlaylistSongsUpdateWithoutSongInput, PlaylistSongsUncheckedUpdateWithoutSongInput>
  }

  export type PlaylistSongsUpdateManyWithWhereWithoutSongInput = {
    where: PlaylistSongsScalarWhereInput
    data: XOR<PlaylistSongsUpdateManyMutationInput, PlaylistSongsUncheckedUpdateManyWithoutSongInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutSongInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutSongInput, VideoUncheckedUpdateWithoutSongInput>
    create: XOR<VideoCreateWithoutSongInput, VideoUncheckedCreateWithoutSongInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutSongInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutSongInput, VideoUncheckedUpdateWithoutSongInput>
  }

  export type VideoUpdateManyWithWhereWithoutSongInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutSongInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    video_url?: StringFilter<"Video"> | string
    songId?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type UserCreateWithoutLikedSongsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    songs?: SongCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedSongsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    songs?: SongUncheckedCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
  }

  export type SongCreateWithoutLikedSongsInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutLikedSongsInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutLikedSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
  }

  export type UserUpsertWithoutLikedSongsInput = {
    update: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type UserUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    songs?: SongUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    songs?: SongUncheckedUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithoutLikedSongsInput = {
    update: XOR<SongUpdateWithoutLikedSongsInput, SongUncheckedUpdateWithoutLikedSongsInput>
    create: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutLikedSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutLikedSongsInput, SongUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongUpdateWithoutLikedSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutLikedSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateWithoutArtistInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutArtistInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutArtistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type SongCreateManyArtistInputEnvelope = {
    data: SongCreateManyArtistInput | SongCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type AlbumCreateWithoutArtistInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id?: number
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type LikedArtistsCreateWithoutArtistInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedArtistsInput
  }

  export type LikedArtistsUncheckedCreateWithoutArtistInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsCreateOrConnectWithoutArtistInput = {
    where: LikedArtistsWhereUniqueInput
    create: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput>
  }

  export type LikedArtistsCreateManyArtistInputEnvelope = {
    data: LikedArtistsCreateManyArtistInput | LikedArtistsCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type SongUpsertWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
  }

  export type SongUpdateManyWithWhereWithoutArtistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    image_url?: StringFilter<"Album"> | string
    artistId?: IntNullableFilter<"Album"> | number | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type LikedArtistsUpsertWithWhereUniqueWithoutArtistInput = {
    where: LikedArtistsWhereUniqueInput
    update: XOR<LikedArtistsUpdateWithoutArtistInput, LikedArtistsUncheckedUpdateWithoutArtistInput>
    create: XOR<LikedArtistsCreateWithoutArtistInput, LikedArtistsUncheckedCreateWithoutArtistInput>
  }

  export type LikedArtistsUpdateWithWhereUniqueWithoutArtistInput = {
    where: LikedArtistsWhereUniqueInput
    data: XOR<LikedArtistsUpdateWithoutArtistInput, LikedArtistsUncheckedUpdateWithoutArtistInput>
  }

  export type LikedArtistsUpdateManyWithWhereWithoutArtistInput = {
    where: LikedArtistsScalarWhereInput
    data: XOR<LikedArtistsUpdateManyMutationInput, LikedArtistsUncheckedUpdateManyWithoutArtistInput>
  }

  export type UserCreateWithoutLikedArtistsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsCreateNestedManyWithoutUserInput
    songs?: SongCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedArtistsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutUserInput
    songs?: SongUncheckedCreateNestedManyWithoutUserInput
    likedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedArtistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedArtistsInput, UserUncheckedCreateWithoutLikedArtistsInput>
  }

  export type ArtistCreateWithoutLikedArtistsInput = {
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutLikedArtistsInput = {
    id?: number
    name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutLikedArtistsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutLikedArtistsInput, ArtistUncheckedCreateWithoutLikedArtistsInput>
  }

  export type UserUpsertWithoutLikedArtistsInput = {
    update: XOR<UserUpdateWithoutLikedArtistsInput, UserUncheckedUpdateWithoutLikedArtistsInput>
    create: XOR<UserCreateWithoutLikedArtistsInput, UserUncheckedCreateWithoutLikedArtistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedArtistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedArtistsInput, UserUncheckedUpdateWithoutLikedArtistsInput>
  }

  export type UserUpdateWithoutLikedArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutUserNestedInput
    songs?: SongUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutUserNestedInput
    songs?: SongUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtistUpsertWithoutLikedArtistsInput = {
    update: XOR<ArtistUpdateWithoutLikedArtistsInput, ArtistUncheckedUpdateWithoutLikedArtistsInput>
    create: XOR<ArtistCreateWithoutLikedArtistsInput, ArtistUncheckedCreateWithoutLikedArtistsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutLikedArtistsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutLikedArtistsInput, ArtistUncheckedUpdateWithoutLikedArtistsInput>
  }

  export type ArtistUpdateWithoutLikedArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutLikedArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserCreateWithoutLikedAlbumsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsCreateNestedManyWithoutUserInput
    songs?: SongCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedAlbumsInput = {
    id: string
    avatar_url?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutUserInput
    songs?: SongUncheckedCreateNestedManyWithoutUserInput
    likedArtists?: LikedArtistsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type AlbumCreateWithoutLikedAlbumsInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    artist?: ArtistCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutLikedAlbumsInput = {
    id?: number
    title: string
    image_url: string
    artistId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutLikedAlbumsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutLikedAlbumsInput, AlbumUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type UserUpsertWithoutLikedAlbumsInput = {
    update: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type UserUpdateWithoutLikedAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutUserNestedInput
    songs?: SongUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutUserNestedInput
    songs?: SongUncheckedUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumUpsertWithoutLikedAlbumsInput = {
    update: XOR<AlbumUpdateWithoutLikedAlbumsInput, AlbumUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<AlbumCreateWithoutLikedAlbumsInput, AlbumUncheckedCreateWithoutLikedAlbumsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutLikedAlbumsInput, AlbumUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumUpdateWithoutLikedAlbumsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    artist?: ArtistUpdateOneWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutLikedAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type PlaylistCreateWithoutPlaylistSongsInput = {
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
    songs?: SongCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutPlaylistSongsInput = {
    id?: number
    title: string
    image_url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutPlaylistSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
  }

  export type SongCreateWithoutPlaylistSongsInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    video?: VideoCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistSongsInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    video?: VideoUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
  }

  export type PlaylistUpsertWithoutPlaylistSongsInput = {
    update: XOR<PlaylistUpdateWithoutPlaylistSongsInput, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
    create: XOR<PlaylistCreateWithoutPlaylistSongsInput, PlaylistUncheckedCreateWithoutPlaylistSongsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylistSongsInput, PlaylistUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type PlaylistUpdateWithoutPlaylistSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    songs?: SongUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutPlaylistSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type SongUpsertWithoutPlaylistSongsInput = {
    update: XOR<SongUpdateWithoutPlaylistSongsInput, SongUncheckedUpdateWithoutPlaylistSongsInput>
    create: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutPlaylistSongsInput, SongUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type SongUpdateWithoutPlaylistSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateWithoutVideoInput = {
    title: string
    image_url: string
    song_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    user?: UserCreateNestedManyWithoutSongsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
    likedSongs?: LikedSongsCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutVideoInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutSongsInput
    likedSongs?: LikedSongsUncheckedCreateNestedManyWithoutSongInput
    playlistSongs?: PlaylistSongsUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutVideoInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutVideoInput, SongUncheckedCreateWithoutVideoInput>
  }

  export type SongUpsertWithoutVideoInput = {
    update: XOR<SongUpdateWithoutVideoInput, SongUncheckedUpdateWithoutVideoInput>
    create: XOR<SongCreateWithoutVideoInput, SongUncheckedCreateWithoutVideoInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutVideoInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutVideoInput, SongUncheckedUpdateWithoutVideoInput>
  }

  export type SongUpdateWithoutVideoInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
  }

  export type PlaylistCreateManyUserInput = {
    id?: number
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedSongsCreateManyUserInput = {
    id?: number
    songId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsCreateManyUserInput = {
    id?: number
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsCreateManyUserInput = {
    id?: number
    albumId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutLikedArtistsNestedInput
  }

  export type LikedArtistsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateManyPlaylistInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    albumId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistSongsCreateManyPlaylistInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type SongUpdateWithoutPlaylistInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutPlaylistSongsNestedInput
  }

  export type PlaylistSongsUncheckedUpdateWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsUncheckedUpdateManyWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateManyAlbumInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    artistId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedAlbumsCreateManyAlbumInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateWithoutAlbumInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsCreateManySongInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistSongsCreateManySongInput = {
    id?: number
    playlistId: number
    createdAt?: Date | string
  }

  export type VideoCreateManySongInput = {
    id?: number
    video_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutUserNestedInput
    likedArtists?: LikedArtistsUncheckedUpdateManyWithoutUserNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongsUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedSongsUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput
  }

  export type PlaylistSongsUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongsUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutSongInput = {
    video_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    video_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateManyArtistInput = {
    id?: number
    title: string
    image_url: string
    song_url: string
    playlistId?: number | null
    albumId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumCreateManyArtistInput = {
    id?: number
    title: string
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedArtistsCreateManyArtistInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    user?: UserUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUpdateManyWithoutSongNestedInput
    video?: VideoUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutSongsNestedInput
    likedSongs?: LikedSongsUncheckedUpdateManyWithoutSongNestedInput
    playlistSongs?: PlaylistSongsUncheckedUpdateManyWithoutSongNestedInput
    video?: VideoUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    song_url?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUpdateWithoutArtistInput = {
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    likedAlbums?: LikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    likedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedArtistsNestedInput
  }

  export type LikedArtistsUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedArtistsUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumCountOutputTypeDefaultArgs instead
     */
    export type AlbumCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistCountOutputTypeDefaultArgs instead
     */
    export type ArtistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedSongsDefaultArgs instead
     */
    export type LikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedSongsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedArtistsDefaultArgs instead
     */
    export type LikedArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedArtistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedAlbumsDefaultArgs instead
     */
    export type LikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedAlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistSongsDefaultArgs instead
     */
    export type PlaylistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistSongsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideoDefaultArgs instead
     */
    export type VideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}