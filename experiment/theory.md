## Theory

#### Part1
                         
<p>Properties of Discrete Fourier Transform</p>
<p  class="heading-content">
In this experiment, we consider some of the properties of DFT for finite-duration sequence and rest will be tabulated in table. Mainly, we are going to explain linearity and circular shift properties of DFT.</p>
<p>Linearity Property</p>                            
<p>If <b>x<sub>1</sub>(n)</b> and <b>x<sub>2</sub>(n)</b> have N-point DFTs <b>X<sub>1</sub>(k)</b>and <b>X<sub>2</sub>(k)</b>, respectively,</p>

$$ax_1(n)+bx_2(n) \stackrel{DFT}\hArr ax_1(k)+bx_2(k)|$$

<p  class="heading-content">In using this property, it is important to ensure that the DFTs are the same length. If <b>x<sub>1</sub>(n)</b>and <b>x<sub>2</sub>(n)</b> have different
lengths, the shorter sequence must be padded with zeros in order to make it the same length as the longer sequence. For an example, if <b>x<sub>1</sub>(n)</b> is of length <b>N1</b> and <b>x<sub>2</sub>(n)</b> is of length <b>N2</b> with <b>N2</b> > <b>N1</b>.
<b>x<sub>1</sub>(n)</b> may be considered to be a sequence of length <b>N2</b> with the last <b>N2-N1</b> values equal to zero, and DFTs of length <b>N2</b> may be taken for both sequences.</p>
<p  class="heading-content">Circular time and frequency shift</p>
<p  class="heading-content">If <b>X(k)</b> is the N-point DFT of x(n), then if we apply N-point DFT on time shifted 
(circular) sequence i.e. <b>x(n-m)</b>, where m is a positive integer, then the according to circular time shift property:</p>

$$DFT[X((n-m))N]=X(k)e^-{(\frac{j2\pi km}{N})}$$

<p>Similarly,</p>

$$DFT[X((n))^\frac{ei2\pi mn}{N}]=X((K-M))N|$$

<p  class="heading-content">It means, if we multiply a complex exponential sequence <b>e<sup>(i2&Pi;mn/N)</sup></b> with the sequence <b>x(n)</b> in
time domain is equivalent to the circular shift of the DFT by m units in frequency domain. This property is called circular frequency shift property of DFT</p>
<p>Periodicity property</p>
<p>If <b>x(n)</b> and <b>X(k)</b> are an N-point DFT pair, then</p>

<p><p style="text-align:center"><b>x(n+N)=x(N) for all n</b> </p>
<p><p style="text-align:center"><b>x(K+N)=X(K) for all k</b></p> 
<p>These periodicities in x(n) and X(k) follow immediatly for the DFT and IDFT, respectively</p>
<p>We previously illustrated the periodicity property in the sequence <b>x(n)</b> for a given DFT. However, we had not previously viewed the DFT <b>X(k)</b> as a periodic sequence. In some applications it is advantageous to do this.</p>
<p>Time reversal of a sequence</p>
<p>If <b>x(n)</b> and <b>X(k)</b> are an N-point DFT pair, then</p>
<p style="text-align:center">DFT[x((-n))N]=DFT[X(N-n)]=x((-k))N=X(N-K)</p>
<p>Hence reversing the N-point sequence in time is equivalent to reversing the DFT values</p>
<p>Circular convolution</p>
<p  class="heading-content">The multiplication of DFTs of two sequences is equivalent to the circular convolution of the two sequences in the time 
domain</p>
<p>If</p>

$$DFT[X_1(N)]=X_1(K)$$

$$DFT[X_2(N)=X_2(K)]$$

$$x_1(n)(N)x_2(n)=x_1(k)x_2(k)$$

<p><b>(N)</b> is the symbol for circular convolution of two sequences i.e. <b>x<sub>1</sub>(n)</b> and <b>x<sub>2</sub>(n)</b></p> 
<p>Parseval's Theorem</p>
<p>For complex-valued sequences <b>x(n)</b> and <b>y(n)</b>, in general, if</p>
<p style="text-align:center">DFT[x(n)]=X(k)</p>
<p style="text-align:center">DFT[y(n)]=x(k)</p>
<p>Then</p>

$$\sum_{n=0}^{N-1}x(n)y*(n)=\frac{1}{N} \sum_{k=0}^{N-1}x(k)Y*(k)$$

<p>This expression is the general form of Parseval's theorem. In the special where <b>y(n)</b> = <b>x(n)</b>, reduced to</p>

$$\sum_{n=0}^{N-1}|x(n)|^2=\frac{1}{N} \sum_{k=0}^{N-1}|x(k)|^2$$

<p>which expresses the energy in the finite-duration sequence <b>x(n)</b> in term of the frequency components <b>{X(k)}</b>.</p>
</div>


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js"></script>    
