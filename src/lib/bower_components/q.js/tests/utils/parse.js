var parse = require('../../src/core/parse');

describe('parse', function () {
    it('should parse one command', function () {
        var commands = parse('click: onclick | filter1 | filter2'),
            command = commands[0];
        commands.length.should.equal(1);
        command.arg.should.equal('click');
        command.target.should.equal('onclick');
        command.filters.should.eql(['filter1', 'filter2']);
    });

    it('should parse multi-commands', function () {
        var commands = parse('click: onclick , keydown: onkeydown'),
            command1 = commands[0],
            command2 = commands[1];
        commands.length.should.equal(2);
        command1.arg.should.equal('click');
        command1.target.should.equal('onclick');
        command1.filters.length.should.equal(0);

        command2.arg.should.equal('keydown');
        command2.target.should.equal('onkeydown');
        command2.filters.length.should.equal(0);
    });

    it('should able to parse the command without argument', function () {
        var commands = parse('value1 | filter1 | filter2'),
            command = commands[0];
        commands.length.should.equal(1);
        command.should.eql({
            target: 'value1',
            filters: ['filter1', 'filter2']
        });
    });
});
