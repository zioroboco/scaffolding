import assert from "yeoman-assert"
import helpers from "yeoman-test"

describe("with no inputs", () => {
  beforeAll(() => {
    return helpers.run(__dirname)
  })

  it("creates files from templates", () => {
    assert.file("dummyfile.txt")
    assert.fileContent("dummyfile.txt", "my generator")
  })
})
