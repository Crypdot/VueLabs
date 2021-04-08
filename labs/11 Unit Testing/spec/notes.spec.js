describe('notes module', function () {
  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });
  it("should be able to add a new note", function () {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
  });
  it("should ignore blank notes", function () {
    expect(notes.add('')).toBe(false);
    expect(notes.count()).toBe(5);
  });
  it('should ignore notes containing only whitespace', function() {
    expect(notes.add('   ')).toBe(false);
    expect(notes.count()).toBe(5);
  });
  it('should require a string parameter', function() {
    expect(notes.add()).toBe(false);
    expect(notes.count()).toBe(5);
  });
  it('should be able to return a count of notes', function(){
    expect(notes.count()).toBe(5);
  });
  it('should be able to clear all the notes', function(){
    expect(notes.clear()).toBe(true);
    expect(notes.count()).toBe(0);
  });
  it('should be capable of deleting a specific index', function(){
    expect(notes.remove(2)).toBe(true);
    expect(notes.count()).toBe(4);
  });
  it('should be able to find a specific index', function(){
    expect(notes.find('third note')).toBe(2);
  });
  it('should be capable of returning false if the list is empty', function(){
    notes.clear();
    expect(notes.list()).toBe(false);
  });
  it('should be capable of returning false if deleting a specific index is impossible', function(){
    expect(notes.remove(9)).toBe(false);
  })

});