import assert from "yeoman-assert"
import helpers from "yeoman-test"

describe("@zioroboco/generator-generator", () => {
  beforeAll(() => {
    return helpers.run(__dirname)
  })

  it("creates files", () => {
    assert.file("dummyfile.txt")
    assert.fileContent("dummyfile.txt", "dummyfile")
    assert.fileContent("dummyfile.txt", "Hello")
  })
})
