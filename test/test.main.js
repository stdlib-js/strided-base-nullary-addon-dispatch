/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var isFloat32Array = require( '@stdlib/assert-is-float32array' );
var isFloat64Array = require( '@stdlib/assert-is-float64array' );
var isUint8Array = require( '@stdlib/assert-is-uint8array' );
var resolve = require( '@stdlib/strided-base-dtype-resolve-enum' );
var dispatch = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dispatch( noop, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var f = dispatch( noop, noop );
	t.strictEqual( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which dispatches to an addon function when provided a typed array', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );
	f( x.length, 'float64', x, 1 );

	t.end();

	function addon( N, dx, ax, sx ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'float64' ), 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports boolean arrays (bool)', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = new BooleanArray( 2 );
	f( x.length, 'bool', x, 1 );

	t.end();

	function addon( N, dx, ax, sx ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'bool' ), 'returns expected value' );
		t.strictEqual( isUint8Array( ax ), true, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed arrays (complex64)', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = new Complex64Array( 2 );
	f( x.length, 'complex64', x, 1 );

	t.end();

	function addon( N, dx, ax, sx ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'complex64' ), 'returns expected value' );
		t.strictEqual( isFloat32Array( ax ), true, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function supports complex number typed arrays (complex128)', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = new Complex128Array( 2 );
	f( x.length, 'complex128', x, 1 );

	t.end();

	function addon( N, dx, ax, sx ) {
		t.ok( true, 'called addon' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, resolve( 'complex128' ), 'returns expected value' );
		t.strictEqual( isFloat64Array( ax ), true, 'returns expected value' );
		t.strictEqual( ax.buffer, x.buffer, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which dispatches to a fallback function when not a provided typed array', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = [ 0.0, 0.0 ];
	f( x.length, 'generic', x, 1 );

	t.end();

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback( N, dx, ax, sx ) {
		t.ok( true, 'called fallback' );
		t.strictEqual( N, x.length, 'returns expected value' );
		t.strictEqual( dx, 'generic', 'returns expected value' );
		t.strictEqual( ax, x, 'returns expected value' );
		t.strictEqual( sx, 1, 'returns expected value' );
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a data type enumeration constant when provided a typed array', function test( t ) {
	var f;
	var x;

	f = dispatch( addon, fallback );

	x = new Float64Array( 2 );

	t.throws( fcn1, TypeError, 'throws an error' );
	t.end();

	function fcn1() {
		f( x.length, 'beepboopfoobar', x, 1 );
	}

	function addon() {
		t.ok( false, 'called addon' );
	}

	function fallback() {
		t.ok( false, 'called fallback' );
	}
});

tape( 'the function returns a function which returns the output array (typed arrays; addon)', function test( t ) {
	var f;
	var x;
	var y;

	f = dispatch( noop, noop );

	x = new Float64Array( 2 );
	y = f( x.length, 'float64', x, 1 );

	t.strictEqual( y, x, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which returns the output array (non-typed arrays; fallback)', function test( t ) {
	var f;
	var x;
	var y;

	f = dispatch( noop, noop );

	x = [ 0.0, 0.0 ];
	y = f( x.length, 'generic', x, 1 );

	t.strictEqual( y, x, 'returns expected value' );
	t.end();
});
