const { UNCATEGORISED_CATEGORY } = require(`../const/strings`)
const { compact, appendFlipped } = require(`ramda-adjunct`)
const { apply, append, pipe, path, map, uniq } = require(`ramda`)
const { toSlug } = require(`./url`)
const urlJoin = require(`url-join`)

const collectUniqueCategories = pipe(
  map(path([`node`, `fields`, `category`])),
  compact,
  uniq,
  append(UNCATEGORISED_CATEGORY)
)

const toCategorySlug = pipe(
  toSlug,
  appendFlipped([`/`, `categories`]),
  apply(urlJoin)
)

module.exports = {
  collectUniqueCategories,
  toCategorySlug,
}
