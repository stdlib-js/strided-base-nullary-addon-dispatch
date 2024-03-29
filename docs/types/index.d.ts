/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Add-on function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type (enumeration constant)
* @param x - output array
* @param strideX - `x` stride length
*
* @example
* function addon( N, dtypeX, x, strideX ) {
*     // Call into native add-on...
* }
*/
type AddonFcn<T, U> = ( N: number, dtypeX: number, x: Collection<T>, strideX: number ) => U;

/**
* Fallback function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
*
* @example
* function fallback( N, dtypeX, x, strideX ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcn<T, U> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number ) => U;

/**
* Fallback function supporting alternative indexing semantics.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
*
* @example
* function fallback( N, dtypeX, x, strideX, offsetX ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcnWithOffsets<T, U> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, offsetX: number ) => U;

/**
* Dispatches to a native add-on.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
* @returns `x`
*/
type Dispatcher<T> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number ) => Collection<T>;

/**
* Dispatches to a native add-on.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
* @returns `x`
*/
type DispatcherWithOffsets<T> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, offsetX: number ) => Collection<T>;

/**
* Interface for creating a native add-on dispatcher.
*/
interface Dispatch {
	/**
	* Returns a function which dispatches to a native add-on applying a nullary function.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1 );
	*/
	<T = unknown, U = unknown>( addon: AddonFcn<T, U>, fallback: FallbackFcn<T, U> ): Dispatcher<T>;

	/**
	* Returns a function which dispatches to a native add-on applying a nullary function using alternative indexing semantics.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0 );
	*/
	ndarray<T = unknown, U = unknown>( addon: AddonFcn<T, U>, fallback: FallbackFcnWithOffsets<T, U> ): DispatcherWithOffsets<T>;
}

/**
* Returns a function which dispatches to a native add-on applying a nullary function.
*
* @param addon - add-on function
* @param fallback - fallback function
* @returns dispatch function
*
* @example
* function addon( N, dtypeX, x, strideX ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1 );
*
* @example
* function addon( N, dtypeX, x, strideX ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, offsetX ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch.ndarray( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 0 );
*/
declare var dispatch: Dispatch;


// EXPORTS //

export = dispatch;
