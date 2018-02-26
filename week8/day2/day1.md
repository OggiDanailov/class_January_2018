COdging challenge:
function c(){
 var r = "";
 for(var i = 0; i < 8; i++){
   for(var j = 0; j < 8; j++){
     r+=(i%2 === 0 ? j%2 !== 0 : j%2 === 0)?"#":".";
   }
   r+="\n";
 }
 return r;
}console.log(c());


 
 
 - has_many
 - belongs_to

 - has_one
 - belongs_to
 -  in which model do I want the foreign key to be? In fact, this is the slight difference between has_one and belongs_to in Ruby on Rails.
 -  belongs_to means that the foreign key is in the table for this class. So belongs_to can ONLY go in the class that holds the foreign key.
 -  has_one means that there is a foreign key in another table that references this class. So has_one can ONLY go in a class that is referenced by a column in another table.
	To sum things up: use belongs_to when you want the foreign key in the declaring model, use has_one if you want it on the other model. This foreign_key is actually the only difference between the has_one and belongs_to semantic naming in a one-to-one relationship.
	The has_one association creates a one-to-one match with another model. In database terms, this association says that the other class contains the foreign key. If this class contains the foreign key, then you should use belongs_to instead.

Methods Added by has_one
When you declare a has_one association, the declaring class automatically gains five methods related to the association:

association
association=(associate)
build_association(attributes = {})
create_association(attributes = {})
create_association!(attributes = {})
reload_association

b = Boss.create()
b.cats.build(name: 'whatever')
b.save
(new cat has been declared)
////////////////////////////////
d = Dog.create
d.build_owner(name: 'whatever')
d.create_owner(name: 'whatever')

	
 - has_and_belongs_to_many  
 - has_and_belongs_to_many

 - has_many :through
 - has_many :through
