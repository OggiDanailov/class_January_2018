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

function chess(){
	var result = ""
for(let j = 0;j<8;j++){
	for(let i = 0;i<8;i++){
        if(j%2 == 0){
            if(i% 2 ==0){
             result += "#"
            }else {
                 result += "-"
            }
        }else{
            if(i%2 == 0){
                 result += "-"
            }else {
                 result += "#"
            }
        }
	} result += "\n"
}return result;
}


 
 
 - has_many
 - belongs_to
 User 
 has_many :posts
 Post
 belongs_to :user

 - has_one
 - belongs_to
 User
 has_one :subject
 Subject
 belongs_to :user
 
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

b = Boss.create(name: 'oggi)
b.cats.build(name: 'grisha')
b.save
(new cat has been declared)
////////////////////////////////
the prvious example doesn't work with has_one:




d = Dog.new(name: 'joy')
d.build_owner(name: 'oggi')
d.create_owner(name: 'oggi')
=> new dog with the name of joy and owner of oggi;
this also works with one to many associations

Join table
- simple join - it joins two tables without creating 3 model; HABTM and there is no primary key
- rich join - it has a model

- rails g migration CreateJoinTableRoomSubject room subject 

http://guides.rubyonrails.org/association_basics.html
fCat.al
	
 - has_and_belongs_to_many  
 - has_and_belongs_to_many
 
 s = Subject.first(1)
 r = Room.first(1)
 s.rooms << r
 r.subjects << s
 s.room_ids
 r.subject_ids
 s.rooms.delete(r)
 r1.subjects.delete(r1.subject_ids[1])
 
 - collection
 The collection method returns a Relation of all of the associated objects. If there are no associated objects, it returns an empty Relation
 @rooms = s.rooms
 s.rooms << Subject.find(3)
 

 - has_many :through
 - has_many :through
 
 
 
 <%= form_for @post, :as => :post,
 
