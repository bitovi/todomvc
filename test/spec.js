localStorage.clear();

module("TodoMVC spec", {
	setup: function() {
		S.open('../architecture-examples/canjs/index.html');
	}
});

test("Creates a new Todo", function() {
	S('#new-todo').click().type('Do some nerdy stuff\r').wait(500);
	S('#todo-list li').size(1, 'Got one Todo');
	S('#todo-list li:first label').html('Do some nerdy stuff', 'Todo has correct text');
	S('#todo-count').html(/<strong>1<\/strong>(.*)item(.*)left/, 'Todo count text is correct');
});

test("Marks a Todo as complete", function() {
	S('#todo-list li:first .toggle').click().wait(500);
	S('#todo-list li:first').hasClass('completed', true, 'Todo is completed');
	S('#clear-completed').html(/Clear completed \(1\)/, 'Completed button HTML is correct');
	S('#todo-count').html(/<strong>0<\/strong>(.*)item(.*)left/, 'Todo count text is correct')
});

test("Adding another Todo", function() {
	S('#new-todo').click().type('Finish website\r').wait(500);
	S('#todo-list li').size(2, 'Now two Todos in list');
	S('#todo-count').html(/<strong>1<\/strong>(.*)item(.*)left/, 'Todo count text is correct');
});
